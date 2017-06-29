import FaShield from 'react-icons/lib/fa/shield';
import { Component } from 'react';
import '../../stylesheets/style.css';

class Member extends Component {

  componentWillMount() {
    this.style = {
        backgroundColor: 'gray'
    }
  }

  shouldComponentUpdate(nextProps){
    console.log("should");
    return this.props.admin !== nextProps.admin;
  }

  componentWillUpdate(nextProps){
    console.log("will");
    this.style = {backgroundColor: (nextProps.admin) ? 'green' : 'purple'};
  }


  render() {

    const { name, thumbnail, email, admin, makeAdmin, removeAdmin } = this.props;
      return (
          <div className="member">
            <h1>{name} {(admin) ? <FaShield /> : null}</h1>
            {(admin) ?
              <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
              <a onClick={() => makeAdmin(email)}>Make Admin</a>

            }

            <img src={thumbnail} alt="profile picture" />
            <p><a href={`mailto:${email}`}>{email}</a></p>

          </div>
      );
  }
}

export default Member
