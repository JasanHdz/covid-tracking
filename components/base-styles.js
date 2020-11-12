import React from 'react'
import { createGlobalStyle } from 'styled-components'
import NProgressCSS from 'utils/nprogress'
import ligthenDarkenColor from 'utils/ligthen-darken-color'

const DefaultStyles = createGlobalStyle`
  :root {
    --primaryFont: ${({ theme }) => theme.primaryFont};
    --secondaryFont: ${({ theme }) => theme.secondaryFont};
    --light: ${({ theme }) => theme.white};
    --dark: ${({ theme }) => theme.dark};
    --primary: ${({ theme }) => theme.primary};
    --primaryContrast: ${({ theme }) => theme.primaryContrast};
    --secondary: ${({ theme }) => theme.secondary};
    --secondaryContrast: ${({ theme }) => theme.secondaryContrast};
    --primaryLight: ${({ theme }) => ligthenDarkenColor(theme.primary, 15)};
    --primaryDark: ${({ theme }) => ligthenDarkenColor(theme.primary, -20)};
    --gray: ${({ theme }) => theme.gray};
    --lightGray: ${({ theme }) => theme.lightGray};
  }
  * {
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  ul {
    list-style: none;
  }
  body {
    font-family: var(--primaryFont);
    background: var(--primaryContrast);
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  input, label {
    cursor: pointer;
  }
  
  .group {
    margin-bottom: 15px;
    input[type=text], input[type=number], input[type=email], textarea {
      border-radius: 4px;
      margin-top: 8px;
      border: 1px solid #D0D7DC;
      outline: 0;
      padding: 6px 10px;
      font-size: 14px;
      line-height: 22px;
      box-sizing: border-box;
      width: 100%;
      :focus {
        border-color: var(--dark);
      } 
    }
    textarea {
      resize: none;
      height: 100px;
    }
  }
  .buttons-grid {
    margin-top: 36px;
    display: grid;
    grid-template-columns: 75px 115px;
    grid-column-gap: 16px;
  }

`

function BaseStyles({ theme }) {
  return (
    <>
      <DefaultStyles {...theme} />
      <NProgressCSS />
    </>
  )
}

export default BaseStyles