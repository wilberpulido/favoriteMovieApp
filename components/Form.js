import style from '../styles/components/form.module.scss'
import HeaderForm from './HeaderForm'

export default function Form ({ titleForm, classNameForm, classNameContentForm, iconSrc, children }) {
  if (titleForm) {
    return (
      <form className={style[classNameForm]}>
        <HeaderForm title={titleForm} iconSrc={iconSrc} />
        <div className={style.contentForm}>
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
