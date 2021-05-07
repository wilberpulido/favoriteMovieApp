export default class User {
  constructor ({ firstName, lastName, email, password }) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  getFirstName () {
    return this.firstName
  }

  getLastName () {
    return this.lastName
  }

  async registerUser () {
    // eslint-disable-next-line no-undef
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify(this.firstName, this.lastName, this.email, this.passwordb),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => { console.log(response) })
  }
}
