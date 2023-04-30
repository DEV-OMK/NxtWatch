import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LoginCard = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 0px 16px 8px #f9f9f9'};
  border-radius: 10px;
`

export const LoginLogo = styled.img`
  width: 50%;
  max-width: 300px;
  align-self: center;
  margin-bottom: 40px;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#475569')};
  margin-bottom: 6px;
`

export const InputField = styled.input`
  width: 100%;
  outline: none;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#475569')};
  border: 1px solid ${props => (props.isDarkTheme ? '#e2e8f0' : '#94a3b8')};
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  text-indent: 10px;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 25px;
`
export const CheckboxAndLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Checkbox = styled(InputField)`
  width: 15px;
  height: 15px;
  padding: 0px;
  margin: 0px;
  margin-right: 15px;
`
export const CheckboxLabel = styled(InputLabel)`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#181818')};
  font-weight: 400;
  margin: 0px;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`

export const Error = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
`
