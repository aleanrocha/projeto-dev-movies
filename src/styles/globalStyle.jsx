import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #080808;
    color: #fafafa;
    overflow-x: hidden;
  }
`

export default globalStyle
