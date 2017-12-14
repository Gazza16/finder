import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';


class App extends Component {
    state = {
      viewed: 0,
      maxViews: 10
    }
    render() {
      const { viewed, maxViews } = this.state
    return (
      <div className="App">
        <p>You can view {viewed}/{maxViews} profiles</p>
        <Profile />
      </div>
    );
  }
}

export default App;
