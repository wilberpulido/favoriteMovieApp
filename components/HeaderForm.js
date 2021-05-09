import style from '../styles/components/headerForm.module.scss'

export default function HeaderForm ({ children }) {
  return (
    <div className={style.headerForm}>
      <div>
        <img className={style.iconDataForm} src='icons/user-circle-solid.svg' />
      </div>
      <div>
        <h5>
          {children}
        </h5>
      </div>
    </div>
  )
}
