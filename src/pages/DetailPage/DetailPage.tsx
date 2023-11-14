import { Link, useParams } from 'react-router-dom';
import RepositoriesStor from '../../stores/repositories';
import SelectedRepositoriesStor from '../../stores/selectedRepositories';

import s from './DetailPage.module.css'

export const DetailPage = () => {
  const { id } = useParams()
  const { repositories } = RepositoriesStor
  const { selectedRepositories } = SelectedRepositoriesStor
  const currentRepo = repositories.find(r => r.id === parseInt(id as string)) || selectedRepositories.find(r => r.id === parseInt(id as string))

  return <div>
      <Link to="/"><button className={s.back_button}>назад</button></Link>
      <h2>Страница с подробным описанием</h2>
      <p>{currentRepo?.full_name}</p>
    </div>
}
