import React,{Component} from 'react'
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'

import Basic from "@components/Basic"
import '@styles/App.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render(){
    return (
      <Layout>
        <Header theme="light" className="header">
          <div className="title">iTask项目管理</div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">项目</Menu.Item>
          </Menu>
          <div className="user">
            <Avatar size={30} icon={<UserOutlined />} />
            <div className="username">User</div>
          </div>
        </Header>
        <Content>
          <Layout className="site-layout-background" >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1" icon={<InfoCircleOutlined />}>基础信息</Menu.Item>
                <SubMenu key="sub1" icon={<LaptopOutlined />} title="项目管理">
                  <Menu.Item key="2">任务管理</Menu.Item>
                  <Menu.Item key="3">需求管理</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="content" style={{ padding: '0 24px', minHeight: 280 }}>
              <Basic />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

