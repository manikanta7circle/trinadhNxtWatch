import styled from 'styled-components'

export const LoginPageMainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f8fafc')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.div`
  border-radius: 8px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const LoginPageLogo = styled.img`
  height: 50px;
  margin-bottom: 30px;
`
export const LoginFrom = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const LoginFormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LoginButton = styled.button`
  border-radius: 8px;
  border-width: 0px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b82f6;
  font-weight: bold;
  font-family: Roboto;
  color: #ffffff;
  margin-bottom: 10px;
`
export const TextInputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-size: 12px;
  font-weight: bold;
  font-family: Roboto;
  margin-bottom: 8px;
  margin-top: 8px;
`
export const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 15px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const CheckboxInput = styled.input`
  height: 15px;
`
export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 15px;
`
export const ErrorMsg = styled.p`
  color: red;
`
