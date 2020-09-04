import {observable, action} from "mobx"
import {Auth} from "../models"

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
          console.log("登陆成功")
          resolve(user)
        }).catch(err => {
          console.log("登录失败")
          reject(err)
        })
      }
    )
  }

  @action register() {
    const {username, password} = this.values
    return new Promise((resolve, reject) => {
        Auth.register(username, password).then(user => {
          console.log("登陆成功")
          resolve(user)
        }).catch(err => {
          console.log("登录失败")
          reject(err)
        })
      }
    )
  }

  @action logout() {
    Auth.logout()
  }

}

export {AuthStore}