import React, {useState} from "react"
import {Button} from "antd"
import LogoUrl from "./logo.svg"
import {NavLink, useHistory} from "react-router-dom"
import styled from "styled-components"
import {useStores} from "../stores"
import {observer} from "mobx-react"

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


const Component = observer(() => {
    const history = useHistory()
    const {UserStore, AuthStore} = useStores()

    const handleLogout = () => {
      AuthStore.logout()
      console.log("用户注销")
    }

    const handleLogin = () => {
      console.log("跳转到登录页面")
      history.push("/login")
    }

    const handleRegister = () => {
      console.log("跳转到注册页面")
      history.push("/register")
    }

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
            UserStore.currentUser ? <>
              {UserStore.currentUser.attributes.username}
              <StyleButton type="primary"
                           onClick={handleLogout}>注销</StyleButton>
            </> : <>
              <StyleButton type="primary" onClick={handleLogin}>登录</StyleButton>
              <StyleButton type="primary" onClick={handleRegister}>注册</StyleButton>
            </>
          }
        </Login>
      </Header>
    )
  }
)

export default Component