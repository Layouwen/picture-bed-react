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
  labelCol: {span: 6},
  wrapperCol: {span: 18},
}
const tailLayout = {
  wrapperCol: {offset: 6, span: 18},
}

const Component = () => {
  const onFinish = values => {
    console.log("Success:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  // 用户名校验
  const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject("只能是字母数字下划线")
    if (value.length < 4 || value.length > 10) return Promise.reject("长度为4~10个字符")
    return Promise.resolve()
  }

  return (
    <Wraper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{required: true, message: "请输入账号!"}, {validator: validateUserName}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {required: true, message: "请输入密码！"},
            {min: 4, message: "密码长度不能小于4"},
            {max: 10, message: "密码长度不能大于10"},
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </Wraper>
  )
}


export default Component
