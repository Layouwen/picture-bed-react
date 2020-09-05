import {observable, action} from "mobx"
import {Auth} from "../models"
import UserStore from "./user"
import {message} from "antd"

class AuthStore {
  @observable values = {
    username: "",
    password: "",
  }

  @action setUsername(username) {
    this.values.username = username
  }

  @action setPassword(password) {
    this.values.password = password
  }

  // 登录
  @action login() {
    const {username, password} = this.values
    return new Promise((resolve, reject) => {
        Auth.login(username, password).then(user => {
          UserStore.pullUser()
          resolve(user)
        }).catch(err => {
          UserStore.resetUser()
          message.error("登录失败")
          reject(err)
        })
      }
    )
  }

  // 注册
  @action register() {
    const {username, password} = this.values
    return new Promise((resolve, reject) => {
        Auth.register(username, password).then(user => {
          UserStore.pullUser()
          resolve(user)
        }).catch(err => {
          UserStore.resetUser()
          message.error("注册失败")
          reject(err)
        })
      }
    )
  }

  @action logout() {
    Auth.logout()
  }

}

export default new AuthStore()