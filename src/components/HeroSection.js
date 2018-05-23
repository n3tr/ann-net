import React from 'react'
import styled from 'react-emotion'
import logoUrl from './images/Logo.svg'

const Wrapper = styled('section')`
  background: #fff;
  height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`

const LogoBox = styled('div')`
  position: relative;
`

const LogoImg = styled('img')`
  min-width: 50%;
  opacity: 0.8;
`



export default class HeroSection extends React.Component {
  render() {
    return (
    <Wrapper>
      <LogoBox>
        <LogoImg src={logoUrl} />
      </LogoBox>
    </Wrapper>
    )
  }
}
