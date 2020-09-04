// 导包
import AV, {Query, User} from "leancloud-storage"

// 初始化
AV.init({
  appId: "tWnQveVRnBBzzHNJI3ybSXeF-gzGzoHsz",
  appKey: "UIc7roacBoYyS5NsVcp3AXRL",
  serverURL: "https://twnqvevr.lc-cn-n1-shared.com"
})

const Auth = {
  // 注册
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  // 登录
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  // 注销
  logout() {
    User.logOut()
  },

  // 获取当前用户信息
  getCurrentUser() {
    return User.current()
  }
}

export {Auth}