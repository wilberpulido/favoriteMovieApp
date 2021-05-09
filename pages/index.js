import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import RegisterForm from '../components/RegisterForm'
import OverlappingLayer from '../components/OverlappingLayer'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Movie</title>
        <link rel='icon' href='/film-solid.svg' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito&family=Tillana&display=swap' rel='stylesheet' />
      </Head>

      <OverlappingLayer>
        <RegisterForm />
      </OverlappingLayer>

    </div>
  )
}
