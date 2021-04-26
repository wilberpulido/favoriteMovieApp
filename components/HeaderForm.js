import style from '../styles/components/headerForm.module.scss'

export default function HeaderForm (props) {
  return (
    <div className={style.headerForm}>
      <div>
        <img className={style.iconDataForm} src={props.iconSrc} />
      </div>
      <div>
        <h5>
          {props.title}
        </h5>
      </div>
    </div>
  )
}
