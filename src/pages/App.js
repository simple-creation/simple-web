import React,{Component} from 'react'
import { Layout, Menu, Avatar, Select } from 'antd';
import { UserOutlined, LaptopOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'

import Basic from "@components/Basic"
import '@styles/App.less';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Option = Select.Option;

export default class App extends Component {
  constructor(props) {
    super(props);
    let themeName = 'light';
    this.state = {
        themeName
    };
  }

  addSkin() {
    let body = document.getElementsByTagName("body")[0];
    const getStyle = body.getElementsByTagName('link');
    // 查找style是否存在，存在的话需要删除dom
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {
        if (getStyle[i].getAttribute('data-type') === 'theme') {
          getStyle[i].remove();
        }
      }
    }
    var link = document.createElement('link');
    link.setAttribute('type','text/css');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('data-type','theme');
    link.setAttribute('href','./antd.dark.css');
    document.body.appendChild(link);

  }

  removeSkin() {
    let body = document.getElementsByTagName("body")[0];

    const getStyle = body.getElementsByTagName('link');
    // 查找style是否存在，存在的话需要删除dom
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {
        if (getStyle[i].getAttribute('data-type') === 'theme') {
          getStyle[i].remove();
        }
      }
    }
  }
  
  render(){
    return (
      <Layout>
        <Header theme="light" className="header">
          <div className="title">iTask项目管理</div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">项目</Menu.Item>
          </Menu>
          <Select
            placeholder="Please select theme"
            value={this.state.themeName}
            onSelect={value => {
              value === 'light' ? this.removeSkin() : this.addSkin();
              this.setState({themeName:value});
            }}>
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
          </Select>
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

