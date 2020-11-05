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