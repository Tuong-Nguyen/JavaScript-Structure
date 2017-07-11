import React, {Component, PropTypes} from 'react';
import {TableRow} from "./TableRow";

export const UserList = React.createClass({
  getInitialState(){
    return ([
      {name: 'ABC', age: 55, gender: 'male'},
      {name: 'DEF', age: 24, gender: 'female'},
      {name: 'GHJ', age: 33, gender: 'male'}
    ]);
  },
  render(){
    return (
      <table>
        <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Gender</td>
        </tr>
        </thead>
        <tbody>
        {this.state.map((user, i) => (
          <TableRow user={user} key={i}/>
        ))}
        </tbody>
      </table>
    );
  }
});
UserList.propTypes = {
  users: function(props) {
    if(!Array.isArray(props.users)){
      return new Error('is not array');
    }else if(!props.users.length){
      return new Error(('empty array'));
    }else{
      console.log("ko bat dc gi");
      return null;
    }
  }
};
