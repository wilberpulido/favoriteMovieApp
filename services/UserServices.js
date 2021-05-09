export default class UserService {
  constructor ({ firstName, lastName, email, password }) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
  }

  getFirstName () {
    return this.firstName
  }

  getLastName () {
    return this.lastName
  }

  getEmail () {
    return this.email
  }

  getPassword () {
    return this.password
  }

  async registerUser () {
    // eslint-disable-next-line no-undef
    return await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ ...this.user }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  }
}
