import React, { PropTypes, Component } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.numberOfAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

/*import { Component } from 'react';
import { SkiDayList } from "./SkiDayList";
import { SkiDayCount } from "./SkiDayCount";
import { AddDayForm } from "./AddDayForm";
import { Menu } from "./Menu";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: "Squaw Valley",
          date: "2017-01-01",
          powder: true,
          backcountry: false
        },
        {
          resort: "Thanh",
          date: "2017-01-02",
          powder: false,
          backcountry: true
        },
        {
          resort: "HUY",
          date: "2017-01-03",
          powder: true,
          backcountry: false
        },
        {
          resort: "Mr.Tuong",
          date: "2017-01-04",
          powder: true,
          backcountry: true
        }
      ]
    }

  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }
  countDays(filter) {
    return this.state.allSkiDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className="app">
        <Menu/>
        {(this.props.location.pathname === "/") ?
          <SkiDayCount
            total={this.countDays()}
            powder={this.countDays("powder")}
            backcountry={this.countDays("backcountry")}/> :
          (this.props.location.pathname === "/add-day") ?
            <AddDayForm onNewDay={newDay => this.addDay(newDay)} /> :
            <SkiDayList days={this.state.allSkiDays}
              filter={this.props.params.filter}/>
        }
      </div>
    )
  }
}
*/
