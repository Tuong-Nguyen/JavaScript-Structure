/**
 * Created by nttao on 8/1/2017.
 */
import React from 'react';
import Header from './HeaderComponent';
import Body from  './BodyComponent';

export default class MainPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}
