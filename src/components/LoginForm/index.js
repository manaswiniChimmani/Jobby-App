import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', submitError: false, errorMsg: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, submitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, submitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-bg-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUserName}
            placeholder="username"
            className="f-input"
          />
          <br />

          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="password"
            className="f-input"
          />
          <br />

          <button type="submit" className="form-submit-btn">
            Login
          </button>
          {submitError && <p className="err-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
