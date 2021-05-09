import Form from './Form'
import HeaderForm from './HeaderForm'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import style from '../styles/components/loginForm.module.scss'
import { useState } from 'react'

export default function LoginForm () {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })

  const handlerSubmit = () => {

  }
  const handlerInputChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Form
      classNameForm='dataForm'
      iconSrc='icons/user-circle-solid.svg'
      method='POST'
      handlerSubmit={handlerSubmit}
    >
      <HeaderForm>
        Login
      </HeaderForm>
      <div className={style.loginForm}>
        <Label htmlFor='emailLogin'>
          Email:
        </Label>
        <Input
          name='email'
          id='emailLogin'
          placeholder='Jacop@gmail.com'
          type='text'
          handlerChange={handlerInputChange}
        />
        <Label htmlFor='passwordLogin'>
          Password:
        </Label>
        <Input
          name='password'
          id='passwordLogin'
          placeholder='password'
          type='password'
          handlerChange={handlerInputChange}
        />
        <Button type='submit'>
          LOGIN
        </Button>
      </div>
    </Form>
  )
}
