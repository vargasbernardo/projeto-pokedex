import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --light-text-color: #ffffff;
        --dark-text-color: #0F0F0F;
        --light-background-color: #ffffff;
        --dark-background-color: #5E5E5E;
        --button-background-color: #33A4F5;
        --secondary-button-background-color: #FF6262;

    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Inter;
    }


`