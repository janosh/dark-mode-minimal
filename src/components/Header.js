import React from 'react'
import styled from 'styled-components'
import DarkToggle from './DarkToggle'
import { Link } from 'gatsby'
import { AircraftLanding } from 'styled-icons/entypo'
import { Pages } from 'styled-icons/remix-fill'
import { Github } from 'styled-icons/fa-brands'

const Div = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-gap: 1em;
  padding: 1em 0;
  margin-bottom: 5em;
  svg {
    margin-right: 0.5em;
  }
`

export default () => (
  <Div>
    <DarkToggle />
    <Link to="/">
      <AircraftLanding size="1.7em" />
      Landing page
    </Link>
    <Link to="/page-2">
      <Pages size="1.5em" />
      Page 2
    </Link>
    <a href="https://github.com/janosh/dark-mode-minimal">
      <Github size="1.5em" css="vertical-align: -0.4em;" />
      GitHub
    </a>
    <DarkToggle />
  </Div>
)
