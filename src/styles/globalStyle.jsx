import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  body {
    background-color: #080808;
  }
`

export default globalStyle
