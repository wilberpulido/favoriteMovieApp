import style from '../styles/components/button.module.scss'

export default function Button ({ children, type }) {
  const buttonClass = type === 'submit' ? 'submitType' : ''

  return (
    <div className={style.buttonBox}>
      <button
        className={style[buttonClass]}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}
