import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
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

export default function App({ children }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}
