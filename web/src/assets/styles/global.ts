import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #fff;
        background-color: #ebf2f5;
    }

    body, input, button, text-area {
        font: 600 18px Nunito, sans-serif;
    }
`;
