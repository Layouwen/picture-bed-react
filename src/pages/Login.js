import React from "react"
import styled from "styled-components"
import {Form, Input, Button, Checkbox} from "antd"

const Wraper = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,.2);
  border-radius: 4px;
`

const Title = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`

const layout = {
  labelCol: {span: 4},
  wrapperCol: {span: 20},
}
const tailLayout = {
  wrapperCol: {offset: 4, span: 20},
}

const Component = () => {
  const onFinish = values => {
    console.log("Success:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Wraper>
      <Title>注册</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{required: true, message: "请输入账号!"}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{required: true, message: "请输入密码！"}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    </Wraper>
  )
}


export default Component
