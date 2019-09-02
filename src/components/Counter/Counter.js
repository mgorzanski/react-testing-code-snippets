import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button className="counter-button" onClick={this.incremen}>  {/* misspelled name of the function */}
          Clicked: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;