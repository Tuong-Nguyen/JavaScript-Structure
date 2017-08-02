import { Link } from 'react-router';
import FaHome from 'react-icons/lib/fa/home';

const MainMenu = () => {
  return (
    <nav className="menu">
      <Link to="/"><FaHome/></Link>
      <Link
        to="about"
        activeStyle={{
          backgroundColor: 'White',
          color: 'slategray'
        }}>
        About
      </Link>
      <Link
        to="members"
        activeStyle={{
          backgroudColor: 'white',
          color: 'slategray'
        }}>
        Members
      </Link>
    </nav>
  )
}

export default MainMenu
