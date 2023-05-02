import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MainContainer,
  ResponsiveContainer,
  LoginCard,
  FormContainer,
  InputLabel,
  InputField,
  LoginLogo,
  CheckboxAndLabelContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  Error,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    {
      const loginUrl = 'https://apis.ccbp.in/login'
      const userDetails = {username, password}
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(loginUrl, options)

      if (response.ok === true) {
        const data = await response.json()
        const jwtToken = data.jwt_token
        this.onSubmitSuccess(jwtToken)
      } else {
        const data = await response.json()
        const errorMsg = data.error_msg

        this.setState({
          showErrorMsg: true,
          errorMsg,
        })
      }
    }
  }

  onChangeUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckboxInput = event => {
    this.setState({showPassword: event.target.checked})
  }

  renderUsernameInput = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {username} = this.state
        return (
          <>
            <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
              USERNAME
            </InputLabel>
            <InputField
              id="username"
              value={username}
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsernameInput}
              isDarkTheme={isDarkTheme}
            />
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderPasswordInput = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {showPassword, password} = this.state
        return (
          <>
            <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
              PASSWORD
            </InputLabel>
            <InputField
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={this.onChangePasswordInput}
              isDarkTheme={isDarkTheme}
            />
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <ResponsiveContainer>
                <LoginCard isDarkTheme={isDarkTheme}>
                  <LoginLogo
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                  <FormContainer onSubmit={this.onSubmitForm}>
                    {this.renderUsernameInput()}
                    {this.renderPasswordInput()}
                    <CheckboxAndLabelContainer>
                      <Checkbox
                        id="checkbox"
                        type="checkbox"
                        onChange={this.onChangeCheckboxInput}
                        isDarkTheme={isDarkTheme}
                      />
                      <CheckboxLabel
                        htmlFor="checkbox"
                        isDarkTheme={isDarkTheme}
                      >
                        Show Password
                      </CheckboxLabel>
                    </CheckboxAndLabelContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {showErrorMsg && <Error>*{errorMsg}</Error>}
                  </FormContainer>
                </LoginCard>
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
