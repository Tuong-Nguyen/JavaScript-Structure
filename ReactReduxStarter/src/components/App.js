/**
 * Created by lnthao on 6/29/2017.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component{
  render() {
    return (
      <div className="container-fluild">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
