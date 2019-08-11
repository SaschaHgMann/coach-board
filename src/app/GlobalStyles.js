import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        color: #292929;
        font-family: 'Bahianita', 'cursive';
        font-size: 18px;
        background-color: fff8f0;
        margin: 0;
    }
    ::placeholder {
        font-family: 'Bahianita', 'cursive';
}

`;
