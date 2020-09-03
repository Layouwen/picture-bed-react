import React, {useState} from "react"
import {Button} from "antd"
import LogoUrl from "./logo.svg"
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  color: #fff;
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

const StyleButton = styled(Button)`
  margin-left: 10px; 
`


function Component() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Header>
      <Logo src={LogoUrl} alt=""/>
      <nav>
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
      <Login>
        {
          isLogin ? <>
            梁又文 <StyleButton type="primary" onClick={() => setIsLogin(false)}>注销</StyleButton>
          </> : <>
            <StyleButton type="primary" onClick={() => setIsLogin(true)}>登录</StyleButton>
            <StyleButton type="primary">注册</StyleButton>
          </>
        }
      </Login>
    </Header>
  )
}

export default Component