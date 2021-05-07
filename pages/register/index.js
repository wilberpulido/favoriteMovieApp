import Form from '../../components/Form'
import { useState } from 'react'

export default function Register () {
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
  async function handlerSubmit (e) {
    e.preventDefault()

    // eslint-disable-next-line no-undef
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form>
          <label>First Name:</label>
          <input name='firstName' onChange={handlerInputChange} />
          <label>Last Name: </label>
          <input name='lastName' onChange={handlerInputChange} />
          <label> Email: </label>
          <input name='email' onChange={handlerInputChange} />
          <label> Password: </label>
          <input name='password' type='password' onChange={handlerInputChange} />
          <button onClick={handlerSubmit}>Enviar</button>
        </Form>
      </div>
    </div>
  )
}
