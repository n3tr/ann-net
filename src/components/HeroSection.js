import React from 'react'
import styled from 'react-emotion'
import logoUrl from './images/Logo.svg'
import { Link } from 'react-scroll'

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
  display: flex;
  flex-direction: column;
`

const LogoImg = styled('img')`
  min-width: 50%;
  opacity: 0.8;
`

const Navigator = styled('div')`
margin-top: 40px;
  text-align: center;
`

const MenuLink = styled('a')`
  text-decoration: none;
  font-size: 1.6em;
  color: #d2b0c6;

  &:hover {
    color: #debcd3;
  }
`

export default class HeroSection extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoBox>
          <LogoImg src={logoUrl} />
          <Navigator>
            <Link to="location" smooth={true} style={{ cursor: 'pointer' }}>
              <MenuLink href="#">สถานที่จัดงาน</MenuLink>
            </Link>
          </Navigator>
        </LogoBox>
      </Wrapper>
    )
  }
}
