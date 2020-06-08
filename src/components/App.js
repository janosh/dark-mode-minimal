import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    line-height: 2em;
  }

  a {
    color: var(--color-secondary);
  }

  #gatsby-focus-wrapper {
    margin: 0 auto;
    max-width: 45em;
    padding: 0 1em 1.5em;
  }
`

const components = {
  h1: styled.h1`
    color: var(--color-primary);
    font-size: 2.5em;
  `,
}

export default function App({ children }) {
  return (
    <MDXProvider components={components}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </MDXProvider>
  )
}
