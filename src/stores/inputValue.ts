import { makeAutoObservable } from "mobx"

class InputValueStor {
  value: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setValue = (value: string) => {
    this.value = value
  }
}

const instance = new InputValueStor()
export default instance