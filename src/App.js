import React, { Fragment } from 'react'
import Routes from './Routes'
import styled from 'styled-components'

const Header = styled.header`
  background: #311B92;
  color: white;
  padding: 16px;
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const Main = styled.main`
  padding: 16px;
  flex: 1;
`

export default () => (
  <Fragment>
    <Header>
      <nav>
        <a href="/">Home</a>
      </nav>
    </Header>
    <Main>
      <Routes />
    </Main>
  </Fragment>
)
