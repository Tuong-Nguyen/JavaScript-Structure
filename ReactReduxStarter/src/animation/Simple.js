import React from 'react';

class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }

  componentDidMount() {
    this.moveRight();
  }

  moveRight() {
    this.setState({
      left: this.state.left + 10
    });
    setTimeout(() => this.moveRight(), 200);
  }

  render() {
    return (
      <div style={{ position: 'relative', left: this.state.left, width: 50, height: 50, backgroundColor: 'red' }}>

      </div>
    );
  }
}

export default Simple;

