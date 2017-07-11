import React, {Component, PropTypes} from 'react';
import './../../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css';
export const AddUser = ({name, age, gender, onAddUser}) => {
  let _name, _age, _gender;
  const submit = (e) => {
    e.preventDefault();
    let newUser = {
      name: _name.value,
      age: _age.value,
      gender: _gender.value
    };
    console.log(newUser);
    onAddUser(newUser);

    console.log(_name.value);
    console.log(_age.value);
    console.log(_gender.value);
  };
  return (
    <form onSubmit={submit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"><label>Name:</label></div>
          <div className="col-lg-9"><input name="name" type="text" ref={input => _name = input}/></div>
        </div>
        <div className="row">
          <div className="col-lg-3"><label>Age:</label></div>
          <div className="col-lg-9"><input name="age" type="text" ref={input => _age = input}/></div>
        </div>
        <div className="row">
          <div className="col-lg-3"><label>Gender:</label></div>
          <div className="col-lg-9"><input name="gender" type="text" ref={input => _gender = input}/></div>
        </div>
        <div className="row">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>);
};
