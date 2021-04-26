import style from '../styles/components/label.module.scss'

export default function Label (props) {
  return (
    <label className={style.labelClass} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}
