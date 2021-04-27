import style from '../styles/components/form.module.scss'
import HeaderForm from './HeaderForm'

export default function Form ({ titleForm, classNameForm, classNameContentForm, iconSrc, children }) {
  if (titleForm) {
    return (
      <form className={style[classNameForm]}>
        <HeaderForm iconSrc={iconSrc}>
          {titleForm}
        </HeaderForm>
        <div className={style[classNameContentForm]}>
          {children}
        </div>
      </form>
    )
  }
  return (
    <form className={style[classNameForm]}>
      {children}
    </form>
  )
}
