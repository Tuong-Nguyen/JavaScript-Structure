import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import {Member} from "./Member";


export default class MemberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      loading: false,
      administrators: []
    }
    this.makeAdmin = this.makeAdmin.bind(this)
    this.removeAdmin = this.removeAdmin.bind(this)

  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://api.randomuser.me/?nat=US&results=15')
      .then(response => response.json())
      .then(json => json.results)
      .then(members => this.setState({
        members,
        loading: false
      }))
  }

  //function in compoennt
  makeAdmin(email) {
    const administrators = [
      ...this.state.administrators,
      email
    ]
    this.setState({administrators})
  }

  removeAdmin(email) {
    const administrators = this.state.administrators.filter(
      adminEmail => adminEmail !== email
    )
    this.setState({administrators})
  }

  render() {
    const { members, loading } = this.state
    return (
      <div className="member-list">
        <h1>Society Members</h1>

        {(loading) ?
          <span>loading...</span> :
          <span>{members.length} members</span>
        }

        {(members.length) ?
          members.map(
          (member, i) =>
            <Member
              key={i}
              admin={this.state.administrators.some(
                adminEmail => adminEmail === member.email
              )}
              name={member.name.first + ' ' + member.name.last}
              email={member.email}
              thumbnail={member.picture.thumbnail}
              makeAdmin={this.makeAdmin}
              removeAdmin={this.removeAdmin}
            />
        ) :
        <span>Currently 0 members</span>}
      </div>
    )
  }
}
