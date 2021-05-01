import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import ExitButton from '../components/ExitButton'

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
        classNameForm='dataForm'
        classNameContentForm='register'
        titleForm='Create Account'
        iconSrc='icons/user-circle-solid.svg'
        handlerSubmit
      >
        <Label htmlFor='firstNameRegister'>First Name:</Label>
        <Input
          name='firstNameRegister'
          id='firstNameRegister'
          placeholder='Jacop'
          type='text'
        />
        <Label htmlFor='lastNameRegister'>Last Name:</Label>
        <Input
          name='lastNameRegister'
          id='lastNameRegister'
          placeholder='Smith'
          type='text'
        />
        <Label htmlFor='emailRegister'>Email:</Label>
        <Input
          name='emailRegister'
          id='emailRegister'
          placeholder='jacopSmith@gmail.com'
          type='email'
        />
        <Label htmlFor='password'>Password:</Label>
        <Input
          name='password'
          id='password'
          placeholder='password'
          type='password'
        />
        <Button type='submit'>
          REGISTER
        </Button>
      </Form>
      <ExitButton />

    </div>
  )
}
