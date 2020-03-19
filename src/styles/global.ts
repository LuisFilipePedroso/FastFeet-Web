import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }  

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto',  sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button, a {
    
    &:hover {
      cursor: pointer;
    }
  }

  .react-confirm-alert-overlay {
    background: rgba(25, 25, 25, 0.9) !important;
  }
`;
