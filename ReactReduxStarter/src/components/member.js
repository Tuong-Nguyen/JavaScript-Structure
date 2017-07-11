import React, {Component} from'react';
import './../../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css';

export class Member extends Component {
  constructor(props){
    super(props);
    this.state = {loading: true};
  }
  componentWillMount() {
    this.style = {
      backgroundColor: 'gray'
    }
  }
  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate ' + this.props.user.admin + " | " + nextProps.user.admin);
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }
  shouldComponentUpdate(nextProps) {
    console.log(this.props.user.admin + " | " + nextProps.user.admin);
    return this.props.user.admin !== nextProps.user.admin;
  }
  render() {
    const {user, index, makeAdmin} = this.props;
    const onMakeAdmin = () => {
      makeAdmin(index);
    };
    return (
        <div className="col-lg-4" style={this.style}>
          <h1>{user.name}</h1>
          <h4>{user.age}</h4>
          <h4>{user.gender}</h4>
          <h4>{user.admin ? <a>Admin</a> : <a onClick={onMakeAdmin}>Make Admin</a>}</h4>
        </div>
    );
  }
}
