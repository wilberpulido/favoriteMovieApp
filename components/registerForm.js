import Form from './Form'
import HeaderForm from './HeaderForm'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import style from '../styles/components/registerForm.module.scss'
import { useState } from 'react'

export default function FormRegister () {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  function handlerInputChange (e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handlerSubmit = () => {
    // request for register
  }

  return (
    <Form
      classNameForm='dataForm'
      classNameContentForm='register'
      titleForm='Create Account'
      iconSrc='icons/user-circle-solid.svg'
      handlerSubmit={handlerSubmit()}
    >
      <HeaderForm>
        Create Account
      </HeaderForm>
      <div className={style.registerForm}>
        <Label htmlFor='firstNameRegister'>First Name:</Label>
        <Input
          name='firstNameRegister'
          id='firstNameRegister'
          placeholder='Jacop'
          type='text'
          handlerChange={handlerInputChange}
        />
        <Label htmlFor='lastNameRegister'>Last Name:</Label>
        <Input
          name='lastNameRegister'
          id='lastNameRegister'
          placeholder='Smith'
          type='text'
          handlerChange={handlerInputChange}

        />
        <Label htmlFor='emailRegister'>Email:</Label>
        <Input
          name='emailRegister'
          id='emailRegister'
          placeholder='jacopSmith@gmail.com'
          type='email'
          handlerChange={handlerInputChange}
        />
        <Label htmlFor='password'>Password:</Label>
        <Input
          name='password'
          id='password'
          placeholder='password'
          type='password'
          handlerChange={handlerInputChange}
        />
        <Button type='submit'>
          REGISTER
        </Button>
      </div>
    </Form>
  )
}
