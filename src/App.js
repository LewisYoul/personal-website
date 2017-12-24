import React from 'react';
import './App.css';
import Blog from './blog/blog.js'
import Profile from './profile/profile.js'
import About from './about/about.js'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    showAbout: false,
    showBlog: false,
    showProfile: false,
    clicked: 'clicked',
    unclicked: 'unclicked'
  }
  this.showBlog = this.showBlog.bind(this)
  this.showProfile = this.showProfile.bind(this)
  this.resetStatesToFalse = this.resetStatesToFalse.bind(this)
  this.setClass = this.setClass.bind(this)
  this.showAbout = this.showAbout.bind(this)
  this.showComponent = this.showComponent.bind(this)
}

// I want to refactor showBlog and showProfile into one method where an argument is passed in

  showComponent(component) {
    this.resetStatesToFalse()
    this.setState(
      { component: true }
    );
  }

  showAbout() {
    this.resetStatesToFalse()
    this.setState(
      { showAbout: true }
    );
  }

  showBlog() {
    this.resetStatesToFalse()
    this.setState(
      { showBlog: true }
    );
  }

  showProfile() {
    this.resetStatesToFalse()
    this.setState(
      { showProfile: true }
    )
  }

  resetStatesToFalse() {
    this.setState({
      showBlog: false,
      showProfile: false,
      showAbout: false
       }
    );
  }

  setClass(content) {
    if (content) {
      return this.state.clicked
    } else {
      return this.state.unclicked
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-2">
            <h2 onClick={ this.showAbout } >About</h2>
          </div>
          <div className="col-sm-2">
            <h2>Skills</h2>
          </div>
          <div className="col-sm-2">
            <h2>Portfolio</h2>
          </div>
          <div className="col-sm-2">
            <h2>Contact</h2>
          </div>
          <div className="col-sm-2">
            <h2>Blog</h2>
          </div>
          <div className="col-sm-2">
            <h2>CV</h2>
          </div>

        </div>
        <h1 className={ this.setClass(this.state.showBlog) } onClick={ this.showBlog }>Blog</h1>
        <h1 className={ this.setClass(this.state.showProfile) } onClick={ this.showProfile}>Profile</h1>
        <div className="root">
          {console.log(this.state.showAbout)}
          { this.state.showAbout ? <About /> : null }
          { this.state.showBlog ? <Blog /> : null }
          { this.state.showProfile ? <Profile /> : null }
        </div>
      </div>
    )
  }
}

export default App;
