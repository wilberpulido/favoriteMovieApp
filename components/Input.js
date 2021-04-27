import style from '../styles/components/input.module.scss'

export default function Input ({ name, id, placeholder, type }) {
  return (
    <div className={style.inputBox}>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        className={style.inputClass}
      />
    </div>
  )
}
