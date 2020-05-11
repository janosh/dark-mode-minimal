import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import DarkToggle from '../components/DarkToggle'

const Title = styled.h1`
  color: var(--color-primary);
  font-size: 4em;
`

const IndexPage = () => (
  <>
    <Title>Hello world!</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2">Go to page 2</Link>
    <DarkToggle />
  </>
)

export default IndexPage
