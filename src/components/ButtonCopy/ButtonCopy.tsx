import s from './ButtonCopy.module.css'

interface IButtonCopyProps {
  children: string;
  value: string;
}

export const ButtonCopy = ({ value, children }: IButtonCopyProps) => {

  const handleClickCopy: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;
    navigator.clipboard.writeText(value)
    target.innerText = 'Copied'
    setTimeout(() => {
      target.innerText = children
    }, 2000)
  }
    
  return (<button className={s.copy} type="button" onClick={handleClickCopy}>{children}</button>)
}