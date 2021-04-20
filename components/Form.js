import style from '../styles/components/form.module.scss'
import HeaderForm from './HeaderForm'

export default function Form (props) {
  if (props.titleForm) {
    return (
      <form className={style[props.className]}>
        <HeaderForm title={props.titleForm} />
        {props.children}
      </form>
    )
  }
  return (
    <form className={style[props.className]}>
      {props.children}
    </form>
  )
}
