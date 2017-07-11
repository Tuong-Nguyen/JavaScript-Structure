import React, {Component, PropTypes} from 'react';
import {TableRow} from "./TableRow";
import {Link} from 'react-router';

export class UserList extends Component{
  constructor(props){
    super(props);
    //this.state = {value: this.initialState()};
  }
  initialState(){
    return [
      {name: 'ABC', age: 34, gender: 'male', admin: true},
      {name: 'DEF', age: 24, gender: 'female', admin: false},
      {name: 'GHJ', age: 33, gender: 'male', admin: false}
    ];
  }
  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Gender</td>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, i) =>(
              <TableRow user={user} key={i}/>
            ))}
          </tbody>
        </table>
        <Link to="/adduser">Add User</Link>
      </div>
    );
  }
}
UserList.propTypes = {
  users: function(props) {
    if(!Array.isArray(props.users)){
      return new Error('is not array');
    }else if(!props.users.length){
      return new Error(('empty array'));
    }else{
      console.log("length:" + props.users.length);
      return null;
    }
  }
};
