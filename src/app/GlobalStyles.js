import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        color: #292929;
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        background-color: fff8f0;
        margin: 0;
    }
    ::placeholder {
       
        font-size: 16px;

}

`;
