import {Component} from 'react';

export class TableRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.gender}</td>
      </tr>
    )
  }
}
