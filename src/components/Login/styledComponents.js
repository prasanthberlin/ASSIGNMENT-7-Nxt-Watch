import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const FromContainer = styled.form`
  background-color: ${props => (props.themeColor ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`

export const WebsiteLogo = styled.img`
  width: 130px;
  margin-top: 10px;
  margin-bottom: 35px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.themeColor ? '#f9f9f9' : '#475569')};
`

export const UsernameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: #1e293b;
  font-weight: 500;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: #1e293b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const ShowPasswordContainer = styled.div`
  align-self: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const CheckBox = styled.input`
  margin-right: 10px;
`
export const ShowPassword = styled.label`
  font-family: roboto;
  color: ${props => (props.themeColor ? '#f9f9f9' : '#181818')};
  font-weight: 500;
  font-size: 15px;
`
