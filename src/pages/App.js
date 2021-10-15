import React, { Component } from 'react';



import SimpleComponent from './routes';
import SimpleLayout from '@components/layout/simple/index';

import '../styles/App.less'

export default class App extends Component {
  constructor(props) {
    super(props);

  }

 

  
  render() {
   
    return (
    
      <SimpleLayout>
        <SimpleComponent></SimpleComponent>
      </SimpleLayout>

    );
    
  }
}

