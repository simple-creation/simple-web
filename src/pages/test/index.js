import React,{Component} from 'react';
import {SimplePage} from 'simple-framework/base'
import {Block5} from 'simple-framework'
export default class Test extends SimplePage {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    super.componentDidMount();
    this.appendSection(Block5);
    this.renderPage();
  }

  render(){
    return (
      <div>我是需求管理
        {this.sections()}
      </div>
    );
  }
}

