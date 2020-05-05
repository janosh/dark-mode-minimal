import React from 'react'
import styled from 'styled-components'
import DarkToggle from './DarkToggle'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`

export default function Header({ siteTitle }) {
  return (
    <Wrapper>
      {siteTitle}
      <DarkToggle />
    </Wrapper>
  )
}
