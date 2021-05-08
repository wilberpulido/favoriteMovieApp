import style from '../styles/components/form.module.scss'

export default function Form ({ classNameForm, handlerSubmit, method, children }) {
  return (
    <form method={method} className={style[classNameForm]} onSubmit={handlerSubmit}>
      {children}
    </form>
  )
}
