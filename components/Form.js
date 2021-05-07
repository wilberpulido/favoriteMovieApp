import style from '../styles/components/form.module.scss'

export default function Form ({ classNameForm, handlerSubmit, children }) {
  return (
    <form className={style[classNameForm]} onSubmit={handlerSubmit}>
      {children}
    </form>
  )
}
