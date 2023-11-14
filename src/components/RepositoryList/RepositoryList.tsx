import { observer } from 'mobx-react-lite';
import SelectedRepositoriesStor from '../../stores/selectedRepositories';
import { Link } from 'react-router-dom';
import s from './RepositoryList.module.css'

interface IListProps {
  repositories: any[];
  isAdd?: boolean;
}

export const RepositoryList = observer(({ repositories, isAdd = false }: IListProps) => {
  const { addRepository } = SelectedRepositoriesStor

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation()
  }

  return <ul className={s.repo_list}>
    {repositories?.map((repo, i) => {
      return <li key={repo['full_name'] + i} className={s.repo} onClick={isAdd ? () => addRepository(repo) : undefined}>
        <div className={s.repo_content}>
        <img className={s.repo_logo} width="50" height="50" src={repo.owner.avatar_url} alt="Owner logo"/>
        <div>
          <p className={s.link}>Ссылка: <a href={repo.html_url} onClick={handleClick} target="_blank" rel="noreferrer">{repo.full_name}</a></p>
          <p>Звезд: <span>{repo.stargazers_count}</span></p>
          <p>Форков: <span>{repo.forks_count}</span></p>
        </div>
        </div>
        <Link to={`/${repo.id}`} onClick={handleClick}><button className={s.more_button}>подробнее</button></Link>
        </li>
    })}
  </ul>
})
