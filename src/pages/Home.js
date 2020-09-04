import React from "react"
import {observer} from "mobx-react"
import {useStores} from "../stores"
import Uploader from "../components/Uploader"

const Home = observer(() => {
  const {UserStore} = useStores()
  return (
    <>
      {
        UserStore.currentUser ? <h1>Hello {UserStore.currentUser.attributes.username}</h1> : <h1>未登录</h1>
      }
      <Uploader/>
    </>
  )
})

export default Home