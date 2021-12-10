import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
     font-family: 'Roboto', sans-serif;
     font-weight: 500;
  }

  body {
    -webkit-font-smoothing: antialiased;
   
    
  }

  button {
    cursor: pointer;
  }
`
