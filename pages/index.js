import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      HOME
      <div>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
        <div className={styles.box4} />
        <div className={styles.box5} />
      </div>
      <div>
        <div className={styles.box6} />
        <div className={styles.box7} />
        <div className={styles.box8} />
        <div className={styles.box9} />
        <div className={styles.box10} />

      </div>

    </div>
  )
}
