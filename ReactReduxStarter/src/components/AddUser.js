import React, {Component, PropTypes} from 'react';
import './../../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css';
export class AddUser extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();
    let newUser = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      gender: this.refs.gender.value
    };
    this.props.onAddUser(newUser);
    console.log(this.refs.name.value);
    console.log(this.refs.age.value);
    console.log(this.refs.gender.value);
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3"><label>Name:</label></div>
            <div className="col-lg-9"><input name="name" type="text" ref="name"/></div>
          </div>
          <div className="row">
            <div className="col-lg-3"><label>Age:</label></div>
            <div className="col-lg-9"><input name="age" type="text" ref="age"/></div>
          </div>
          <div className="row">
            <div className="col-lg-3"><label>Gender:</label></div>
            <div className="col-lg-9"><input name="gender" type="text" ref="gender"/></div>
          </div>
          <div className="row">
            <button type="submit">Add</button>
          </div>
        </div>
      </form>);
  }
}
