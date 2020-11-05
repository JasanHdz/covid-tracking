import React from 'react'
import styled from 'styled-components'

const TypographyStyled = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px !important`};
  text-align: ${({ align }) => align};
  font-family: ${({ fontFamily }) => fontFamily};
  opacity: ${({ opacity }) => opacity}; 
`

const H1Styled = styled(TypographyStyled)`
  font-size: 4em;
`
export function H1({ children, ...props }) {
  return (
    <H1Styled as="h1" {...props}>
      {children}
    </H1Styled>
  )
}

const H2Styled = styled(TypographyStyled)`
  font-size: 2em;
`
export function H2({ children, ...props }) {
  return (
    <H2Styled as="h2" {...props}>
      {children}
    </H2Styled>
  )
}

const H3Styled = styled(TypographyStyled)`
  font-size: 1.5em;
`
export function H3({ children, ...props }) {
  return (
    <H3Styled as="h3" {...props}>
      {children}
    </H3Styled>
  )
}

const H4Styled = styled(TypographyStyled)`
  font-size: 1.3125em;
`
export function H4({ children, ...props }) {
  return (
    <H4Styled as="h4" {...props}>
      {children}
    </H4Styled>
  )
}

const PStyled = styled(TypographyStyled)`
  font-size: 1em;
`
export function P({ children, ...props }) {
  return (
    <PStyled as="p" {...props}>
      {children}
    </PStyled>
  )
}

const SmallStyled = styled(TypographyStyled)`
  font-size: .75em;
`
export function Small({ children, ...props }) {
  return (
    <SmallStyled as="small" {...props}>
      {children}
    </SmallStyled>
  )
}
