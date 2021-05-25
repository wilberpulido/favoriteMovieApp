import ExitButton from './ExitButton'
import style from '../styles/components/overlappingLayer.module.scss'

export default function OverlappingLayer ({ children }) {
  return (
    <main className={style.baseLayer}>
      <div className={style.childrenOverlappingBox}>
        {children}
        <div className={style.exitButtonBox}>
          <ExitButton />
        </div>

      </div>
    </main>
  )
}
