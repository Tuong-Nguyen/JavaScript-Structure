/**
 * Created by nttao on 7/7/2017.
 */
import React, {Component} from'react';
import './../../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { Member } from './member'

export class MemberList extends Component{

  shouldComponentUpdate(nextProps){
    console.log(this.props.users !== nextProps.users);
    return (this.props.users !== nextProps.users);
  }
  render(){
    const {users, makeAdmin} = this.props;
    const onMakeAdmin = (index)=>{
      users[index].admin = true;
      makeAdmin(users);
    };
    return(
      <div className="container">
        {users.map((user, i) =>(
          <Member user={user} index={i} makeAdmin={onMakeAdmin}/>
        ))}
      </div>
    );
  }
}
