import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { SkiDayCount } from './SkiDayCount';
import {UserList} from "./UserList_State";
import {Router, Route, hashHistory} from 'react-router';
import {Menu} from './menu';
import {AddUser} from './AddUser_StateLess';
import {MemberList} from './MemberList';
import {connect} from 'react-redux';
import * as UserAction from './../actions/userActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

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

class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {value: userList};
    this.addUser = this.addUser.bind(this);
    this.makeAdmin = this.makeAdmin.bind(this);
    this.props.actions.loadAllUsersWithThunk();
  }
  addUser(newUser){
    //this.props.dispatch(UserAction.addUser(newUser));
    this.props.actions.saveUser(newUser).then(() => {
      toastr.success("Save successfully!");
      this.context.router.push('/members');
    }).catch(error =>{
      toastr.error(error.message);
    });
    // this.setState({
    //   value: [...this.state.value, ...this.props.users]
    // });
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
          <MemberList users={this.props.users}
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
//Pull in the React Router context so router is available on this.context.router.
App.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.userReducer
  };

}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(UserAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
