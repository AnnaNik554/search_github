export const debounce = (fn: Function, ms: number) => {
  let timer: ReturnType<typeof setTimeout>
  return function(this: any, ...args: any[]){
    const func = () => {fn.apply(this, args)}
    clearTimeout(timer)
    timer = setTimeout(func, ms)
  }
};