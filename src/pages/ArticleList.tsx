/** @format */

import React, {useState, useEffect} from 'react'
import {List, Row, Col, Modal, Button, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../static/css/ArticleList.css'
const {confirm} = Modal

export default function ArticleList(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    getList()
  }, [])
  //获取文章列表
  const getList = () => {
    axios({
      method: 'get',
      url: servicePath.getArticleList,
      withCredentials: true,
    }).then(res => {
      setList(res.data.data)
    })
  }
  //删除文章
  const delArticle = id => {
    confirm({
      title: '确定要删除这篇文章么？',
      content: '删除将无法恢复，请三思！',
      onCancel() {
        message.success('取消删除')
      },
      onOk() {
        axios({
          url: servicePath.delArticle + id,
          withCredentials: true,
        }).then(() => {
          message.success('文章删除成功')
          getList()
        })
      },
    })
  }
  //修改文章的跳转方法
  const updateArticle = id => {
    props.history.push('/index/add/' + id)
  }
  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>标题</b>
            </Col>
            <Col span={4}>
              <b>类别</b>
            </Col>
            <Col span={4}>
              <b>发布时间</b>
            </Col>
            <Col span={4}>
              <b>浏览量</b>
            </Col>
            <Col span={4}>
              <b>操作</b>
            </Col>
          </Row>
        }
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Row className="list-div">
              <Col span={8}>{item.title}</Col>
              <Col span={4}>{item.typeName}</Col>
              <Col span={4}>{item.addTime}</Col>
              <Col span={4}>{item.view_count}</Col>
              <Col span={4}>
                <Button type="primary" onClick={() => updateArticle(item.id)}>
                  修改
                </Button>
                <Button type="primary" onClick={() => delArticle(item.id)}>
                  删除
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  )
}
