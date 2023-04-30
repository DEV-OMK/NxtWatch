import styled from 'styled-components'

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: flex-start;

  @media screen and (min-width: 576px) {
    max-width: 500px;
  }
`

export const UserInput = styled.input`
  height: 30px;
  width: 100%;
  outline: none;
  border: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  padding: 8px;
  text-indent: 10px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#606060')};
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  font-size: 16px;
  font-weight: 400;
`

export const SearchIconButton = styled.button`
  outline: none;
  font-size: 20px;
  border: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  color: ${props => (props.isDarkTheme ? '#909090' : '#cbd5e1')};
  background-color: ${props => (props.isDarkTheme ? '#606060' : '#ebebeb')};
  cursor: pointer;
  height: 30px;
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HomeContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HomeResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`
