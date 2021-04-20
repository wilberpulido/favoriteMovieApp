import style from '../styles/components/label.module.scss'

export default function Label (props) {
  return (
    <label className={style.label} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}
