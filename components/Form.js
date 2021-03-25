import style from '../styles/components/form.module.scss'

export default function Form (props) {
  return (
    <form style={style}>
      {props.children}
    </form>
  )
}
