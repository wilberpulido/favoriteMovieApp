import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Favorite Movie</title>
        <link rel='icon' href='/film-solid.svg' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito&family=Tillana&display=swap' rel='stylesheet' />
      </Head>
      <Form
        classNameForm='dataForm' titleForm='Create Account'
        iconSrc='icons/user-circle-solid.svg' handlerSubmit
      >
        <div className='boxLabel'>
          <Label htmlFor='firstNameRegister'>First Name</Label>
        </div>
        <div>
          <Input
            name='firstNameRegister'
            id='firstNameRegister'
            placeholder='Jacop'
            type='text'
          />
        </div>
        <Label htmlFor='lastNameRegister'>Last Name</Label>
        <Input
          name='lastNameRegister'
          id='lastNameRegister'
          placeholder='Smith'
          type='text'
        />

        <Label htmlFor='emailRegister'>Email</Label>
        <Input
          name='emailRegister'
          id='emailRegister'
          placeholder='jacopSmith@gmail.com'
          type='email'
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          name='password'
          id='password'
          placeholder='password'
          type='password'
        />
      </Form>

    </div>
  )
}
