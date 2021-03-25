import style from '../styles/components/form.module.scss'

export default function Form (props) {
  return (
    <form id={style.formComponent}>
      {props.children}
    </form>
  )
}
