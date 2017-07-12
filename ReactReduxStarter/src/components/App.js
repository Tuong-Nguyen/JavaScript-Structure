import React from 'react';
import { render } from 'react-dom';
import { SkiDayCount } from './SkiDayCount';
import {UserList} from "./UserList_State";
import {Router, Route, hashHistory} from 'react-router';
import {Menu} from './menu';
import {AddUser} from './AddUser_StateLess';
import {MemberList} from './MemberList';

var userList = [
  {name: 'ABC', age: 34, gender: 'male', admin: true},
  {name: 'DEF', age: 24, gender: 'female', admin: false},
  {name: 'GHJ', age: 33, gender: 'male', admin: false}
];
export const PageNotFound = () =>(
  <div>
    <h1>Page not found!</h1>
  </div>
);

export const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>
);

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: userList};
    this.addUser = this.addUser.bind(this);
    this.makeAdmin = this.makeAdmin.bind(this);
  }
  addUser(newUser){
    this.setState({
      value: [...this.state.value, newUser]
    });
    alert("Successful!");
  }
  makeAdmin(users){
    this.setState({value: users});
  }
  render() {
    return (
      <div>
        <Menu/>
        {(this.props.location.pathname === "/userlist") ?
          <UserList users={this.state.value}/> :
        (this.props.location.pathname === "/members") ?
          <MemberList users={this.state.value}
                  makeAdmin={this.makeAdmin}/> :
        (this.props.location.pathname === "/adduser") ?
          <AddUser onAddUser={this.addUser}/>:
        (this.props.location.pathname === "/skidaycount") ?
          <SkiDayCount total="50" powder="20" backcountry="10" goal="100"/>:
        <Home/>
        }
      </div>
    );
  }
}
