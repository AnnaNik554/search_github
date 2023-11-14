import { makeAutoObservable, runInAction } from "mobx"
import { getRepositories } from '../api/getRepositories'

class RepositoriesStor {
  repositories: any[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getRepositoriesAction = async (value: string, controller: AbortController) => {
    try {
      const res = await getRepositories(value, controller)

      runInAction(() => {
        this.repositories = res
      })
    } catch (err){
      console.log(err)
    }
  }

  clearRepositoriesAction = () => {
    this.repositories = []
  }
}

const instance = new RepositoriesStor()
export default instance
