/** @format */

import React, {useState} from 'react'
import {Layout, Menu, Breadcrumb} from 'antd'
import {PieChartOutlined, FileOutlined, UserOutlined} from '@ant-design/icons'
import '../static/css/Index.css'
import {Route} from 'react-router-dom'
import AddArticle from './AddArtitle'
import ArticleList from './ArticleList'

const {Content, Footer, Sider} = Layout
const {SubMenu} = Menu

export default function Index(props) {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }
  const handleClickArticle = e => {
    if (e.key === 'addArticle') {
      props.history.push('/index/add')
    } else if (e.key === 'articleList') {
      props.history.push('/index/list')
    }
  }
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClickArticle}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            工作台
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理">
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<FileOutlined />}>
            留言管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <div>
              <Route path="/index/" exact component={AddArticle}></Route>
              <Route path="/index/add/" exact component={AddArticle}></Route>
              <Route path="/index/add/:id" exact component={AddArticle}></Route>
              <Route path="/index/list/" exact component={ArticleList}></Route>
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
