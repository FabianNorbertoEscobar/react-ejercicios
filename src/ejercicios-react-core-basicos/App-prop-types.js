import React, { Component } from 'react'
import propTypes from 'prop-types'

class Profile extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  render() {
    const { name, bio, email } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {bio}
        </p>
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Profile
          name='Fabián Escobar'
          bio='Soy Desarrollador Fullstack. Contactame --> fescobar@mail.com'
          email='fescobar@mail.com'
        />
      </div>
    )
  }
}

export default App