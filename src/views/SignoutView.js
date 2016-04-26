import React, { Component } from 'react'
import auth from 'components/auth'

class Signout extends Component {
  componentDidMount() {
    auth.logout()
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
export default Signout
