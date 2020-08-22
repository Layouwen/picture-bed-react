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

const Login = styled.div`
  margin-left: auto;
`

const Button = styled.button`
  margin-left: 10px;
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
      <Login>
        <Button>
          <StyledLink to="/login">登录</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/register">注册</StyledLink>
        </Button>
      </Login>
    </Header>
  )
}

export default Component