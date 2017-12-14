import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';


class App extends Component {
    state = {
      viewed: 0,
      maxViews: 10
    }

    incrementViewed = () => {
     this.setState(prevState => ({
      viewed: prevState.viewed + 1
     }))
    }

    render() {
      const { viewed, maxViews } = this.state
    return (
      <div className="App">
        <p>You can view {viewed}/{maxViews} profiles</p>
        <Profile viewed={viewed} maxViews={maxViews} incrementViewed={this.incrementViewed} />
      </div>
    );
  }
}

export default App;
