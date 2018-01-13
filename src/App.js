import React, { Component } from 'react';
// import logo from './logo.svg';
import  TopicsList  from './components/topics/TopicsList'
import RsvpList from './components/rsvps/RsvpList'
import './App.css';





class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Meetup Mashup</h1>
        </header>

        <main>
            <RsvpList />
            <TopicsList />

        </main>
      </div>
    )
  }
}

export default App;
