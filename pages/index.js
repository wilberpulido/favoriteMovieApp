import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import Form from '../components/Form'
import Label from '../components/Label'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Movie</title>
        <link rel='icon' href='/film-solid.svg' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito&family=Tillana&display=swap' rel='stylesheet' />
      </Head>
      <Form className='dataForm' titleForm='Create Account'>
        <Label htmlFor='firtsName'>Firts Name</Label>
        <input name='firtsName' id='firtsName' placeholder='Wilber' type='text' />
      </Form>

    </div>
  )
}
