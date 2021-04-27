import style from '../styles/components/headerForm.module.scss'

export default function HeaderForm ({ children, iconSrc }) {
  return (
    <div className={style.headerForm}>
      <div>
        <img className={style.iconDataForm} src={iconSrc} />
      </div>
      <div>
        <h5>
          {children}
        </h5>
      </div>
    </div>
  )
}
