import ExitButton from './ExitButton'
import style from '../styles/components/overlappingLayer.module.scss'

export default function OverlappingLayer ({ children }) {
  return (
    <main className={style.baseLayer}>
      {children}
      <ExitButton />
    </main>
  )
}
