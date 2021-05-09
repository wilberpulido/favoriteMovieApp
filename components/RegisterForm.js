import Form from './Form'
import HeaderForm from './HeaderForm'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import style from '../styles/components/registerForm.module.scss'
import UserService from '../services/UserServices'
import { useState } from 'react'

export default function RegisterForm () {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const newUser = new UserService({ ...user })

  const handlerInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handlerSubmit = () => {
    try {
      newUser.registerUser()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form
      classNameForm='dataForm'
      iconSrc='icons/user-circle-solid.svg'
      method='POST'
      handlerSubmit={handlerSubmit}
    >
      <HeaderForm>
        Create Account
      </HeaderForm>
      <div className={style.registerForm}>
        <Label htmlFor='firstNameRegister'>First Name:</Label>
        <Input
          name='firstName'
          id='firstNameRegister'
          placeholder='Jacop'
          type='text'
          handlerChange={handlerInputChange}
        />
        <Label htmlFor='lastNameRegister'>Last Name:</Label>
        <Input
          name='lastName'
          id='lastNameRegister'
          placeholder='Smith'
          type='text'
          handlerChange={handlerInputChange}

        />
        <Label htmlFor='emailRegister'>Email:</Label>
        <Input
          name='email'
          id='emailRegister'
          placeholder='jacopSmith@gmail.com'
          type='email'
          handlerChange={handlerInputChange}
        />
        <Label htmlFor='password'>Password:</Label>
        <Input
          name='password'
          id='passwordRegister'
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
