import React, { Component } from 'react';


import { Layout } from 'antd';
let {Content} = Layout;

import { Header, Header3, Footer, Footer1, Block5, Block0, Block3 } from 'simple-framework';

export default class App extends Component {
  constructor(props) {
    super(props);
 
  }

  componentDidMount() {
  }
  render() {
 
    let that = this;
    return (
    
     
          <Layout>

            <Header style={{ color: '#fff', background: '#000' }} />
            <Content style={{minHeight: '800px'}} >
        
            {that.props.children}
            </Content>
          
            <Footer1>Footer1</Footer1>
          </Layout>
        
    );
   
  }
}

