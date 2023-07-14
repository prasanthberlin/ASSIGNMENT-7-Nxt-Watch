import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginFormContainer,
  FromContainer,
  WebsiteLogo,
  InputContainer,
  LoginButton,
  InputLabel,
  UsernameInputField,
  PasswordInputField,
  ErrorMessage,
  ShowPasswordContainer,
  CheckBox,
  ShowPassword,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: true,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
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

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {password, showPassword} = this.state

        const passwordType = showPassword ? 'password' : 'text'

        return (
          <>
            <InputLabel themeColor={darkTheme} htmlFor="password">
              PASSWORD
            </InputLabel>
            <PasswordInputField
              type={passwordType}
              id="password"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderUsernameField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {username} = this.state

        return (
          <>
            <InputLabel themeColor={darkTheme} htmlFor="username">
              USERNAME
            </InputLabel>
            <UsernameInputField
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoginFormContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {showSubmitError, errorMsg} = this.state

        const websiteLogoUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <LoginFormContainer themeColor={darkTheme}>
            <FromContainer themeColor={darkTheme} onSubmit={this.submitForm}>
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />

              <InputContainer>{this.renderUsernameField()}</InputContainer>
              <InputContainer>{this.renderPasswordField()}</InputContainer>
              <ShowPasswordContainer>
                <CheckBox
                  onClick={this.togglePassword}
                  type="checkbox"
                  id="showPasswordId"
                />
                <ShowPassword themeColor={darkTheme} htmlFor="showPasswordId">
                  Show Password
                </ShowPassword>
              </ShowPasswordContainer>
              <LoginButton type="submit" className="login-button">
                Login
              </LoginButton>
              {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
            </FromContainer>
          </LoginFormContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return this.renderLoginFormContainer()
  }
}

export default Login
