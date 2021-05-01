import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

export default function FormRegister () {
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
  )
}
