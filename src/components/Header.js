import React from 'react'
import LogoUrl from './logo.svg'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
`
const Logo = styled.img`
  height: 30px;
`

const StyledLink = styled(NavLink)`
  margin-left: 30px;
  color: #fff;
  &.active {
  border-bottom: 1px solid #fff;
  }
`

function Component() {
  return (
    <Header>
      <Logo src={LogoUrl} alt=""/>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
    </Header>
  )
}

export default Component