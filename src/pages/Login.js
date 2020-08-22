import React from 'react'
import {observer} from 'mobx-react'
import {useStroes} from '../stores'

const Component = observer(() => {
  const {AuthStore} = useStroes()
  return (
    <>
      <h1>Login: {AuthStore.values.username}</h1>
    </>
  )
})

export default Component
