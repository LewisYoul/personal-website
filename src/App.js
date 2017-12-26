import React from 'react';
import './App.css';
import Blog from './blog/blog.js'
import Profile from './profile/profile.js'
import About from './about/about.js'
import Skills from './skills/skills.js'
import Portfolio from './portfolio/portfolio.js'
import Contact from './contact/contact'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    showAbout: true,
    showSkills: false,
    showPortfolio: false,
    showContact: false,
    clicked: 'clicked',
    unclicked: 'unclicked'
  }
  this.resetStatesToFalse = this.resetStatesToFalse.bind(this)
  this.setClass = this.setClass.bind(this)
  this.showAbout = this.showAbout.bind(this)
  this.showSkills = this.showSkills.bind(this)
  this.showPortfolio = this.showPortfolio.bind(this)
  this.showContact = this.showContact.bind(this)
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

  showSkills() {
    this.resetStatesToFalse()
    this.setState(
      { showSkills: true }
    );
  }

  showPortfolio() {
    this.resetStatesToFalse()
    this.setState(
      { showPortfolio: true }
    )
  }

  showContact() {
    this.resetStatesToFalse()
    this.setState(
      { showContact: true }
    )
  }

  resetStatesToFalse() {
    this.setState({
      showSkills: false,
      showAbout: false,
      showPortfolio: false,
      showContact: false
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
          <div onClick={ this.showAbout } className={ this.setClass(this.state.showAbout) + " col-sm-offset-2 col-sm-2" }>
            <h2>About</h2>
          </div>
          <div onClick={ this.showSkills } className={ this.setClass(this.state.showSkills) + " col-sm-2" }>
            <h2>Skills</h2>
          </div>
          <div onClick={ this.showPortfolio } className={ this.setClass(this.state.showPortfolio) + " col-sm-2" }>
            <h2>Portfolio</h2>
          </div>
          <div onClick={ this.showContact } className={ this.setClass(this.state.showContact) + " col-sm-2" }>
            <h2>Contact</h2>
          </div>
        </div>
        <div className="root">
          { this.state.showAbout ? <About /> : null }
          { this.state.showSkills ? <Skills /> : null }
          { this.state.showPortfolio ? <Portfolio /> : null }
          { this.state.showContact ? <Contact /> : null }
        </div>
      </div>
    )
  }
}

export default App;
