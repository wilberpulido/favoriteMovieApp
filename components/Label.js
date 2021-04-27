import style from '../styles/components/label.module.scss'

export default function Label ({ children, htmlFor }) {
  return (
    <div className={style.labelBox}>
      <label className={style.labelClass} htmlFor={htmlFor}>
        {children}
      </label>
    </div>
  )
}
