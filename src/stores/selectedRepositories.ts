import { makeAutoObservable } from "mobx"

class SelectedRepositoriesStor {
  selectedRepositories: any[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addRepository = (repo: any) => {
    if (!this.selectedRepositories.includes(repo)) {
      this.selectedRepositories.push(repo)
    }
  }

}

const instance = new SelectedRepositoriesStor()
export default instance