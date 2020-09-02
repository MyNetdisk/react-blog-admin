/** @format */
import React, {useState} from 'react'
import {Card, Input, Button, Spin, message} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

export default function Login(props) {
  const [userName, setUserName] = useState('')
  const [passWord, setpassWord] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const checkLogin = () => {
    setIsLoading(true)
    if (!userName) {
      message.error('用户名不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      return false
    } else if (!passWord) {
      message.error('密码不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      return false
    }
    let dataProps = {
      userName: userName,
      passWord: passWord,
    }
    axios({
      method: 'post',
      url: servicePath.login,
      data: dataProps,
      withCredentials: true,
    }).then(res => {
      setIsLoading(false)
      if (res.data.data === '登录成功') {
        localStorage.setItem('openId', res.data.openId)
        props.history.push('/index')
      } else {
        message.error('用户名密码错误')
      }
    })
  }
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="MyNetdisk System" bordered={true} style={{width: 400}}>
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined style={{color: 'rgba(0,0,0,0.25)'}} />}
            onChange={e => {
              setUserName(e.target.value)
            }}
          />
          <br />
          <br />
          <Input.Password
            id="passWord"
            size="large"
            placeholder="Enter your passWord"
            prefix={<LockOutlined style={{color: 'rgba(0,0,0,0.25)'}} />}
            onChange={e => {
              setpassWord(e.target.value)
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            Login in
          </Button>
        </Card>
      </Spin>
    </div>
  )
}
