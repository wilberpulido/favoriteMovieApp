import style from '../styles/components/headerForm.module.scss'

export default function HeaderForm (props) {
  return (
    <div className={style.headerForm}>
      <img style={{ width: '40px' }} src='icons/user-circle-solid.svg' />
      <h3>
        {props.title}
      </h3>
    </div>
  )
}
