import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ButtonCopy } from '../../components/ButtonCopy/ButtonCopy'; 
import { RepositoryList } from '../../components/RepositoryList/RepositoryList'
import RepositoriesStor from '../../stores/repositories';
import SelectedRepositoriesStor from '../../stores/selectedRepositories';
import InputValueStor from '../../stores/inputValue';
import { debounce } from '../../utils';
import s from './MainPage.module.css';

const { getRepositoriesAction } = RepositoriesStor
const getDataWithDebounce = debounce(getRepositoriesAction, 300)

export const MainPage = observer(() => {
  const { value, setValue } = InputValueStor
  const { repositories, clearRepositoriesAction } = RepositoriesStor
  const { selectedRepositories } = SelectedRepositoriesStor

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (value.trim() === '') {
      clearRepositoriesAction()
      return
    }
    let controller = new AbortController()
    getDataWithDebounce(value, controller)
    return () => controller.abort()
  }, [value, clearRepositoriesAction])

  return (<>
      <section>
        <div>
          <input className={s.input} placeholder="search..." value={value} onChange={handleChange}/>
          <ButtonCopy value={value}>Copy</ButtonCopy>
        </div>
      </section>
      <section>
        <div className={s.content_wrapper}>
          <div className={s.content_box}>
            <h3 className={s.subheading}>Список репозиториев</h3>
            <RepositoryList repositories={repositories} isAdd={true}/>
          </div>
          <div className={s.content_box}>
            <h3 className={s.subheading}>Список избранных репозиториев</h3>
            <RepositoryList repositories={selectedRepositories}/>
          </div>
        </div>
      </section>
    </>)
})