import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

const GlobalStyle = css`
  ${emotionReset};

  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: Pretendard;
    font-weight: 500;
  }
  body {
    margin: 0;
    overflow: auto;
    min-height: 100vh;
  }
  a {
    color: inherit;
    padding: 0;
    text-decoration: none;
  }
  input,
  button,
  textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ul,
  li {
    list-style: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    font-family: Pretendard;
    font-weight: 600;
  }
  p {
    font-size: 14px;
  }

  #__next {
    height: 100vh;
  }
`;

export default GlobalStyle;
