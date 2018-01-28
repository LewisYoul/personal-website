import React from 'react';
import './App.css';
import Blog from './blog/blog'
import Profile from './profile/profile.js'
import About from './about/about.js'
import Skills from './skills/skills.js'
import Portfolio from './portfolio/portfolio.js'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    showAbout: true,
    showSkills: false,
    showPortfolio: false,
    showBlog: false,
    clicked: 'clicked',
    unclicked: 'unclicked'
  }
}

// I want to refactor showBlog and showProfile into one method where an argument is passed in

  // showComponent = (component) => {
  //   this.resetStatesToFalse()
  //   this.setState(
  //     { component: true }
  //   );
  // }

  showAbout = () => {
    this.resetStatesToFalse()
    this.setState(
      { showAbout: true }
    );
  }

  showSkills = () => {
    this.resetStatesToFalse()
    this.setState(
      { showSkills: true }
    );
  }

  showPortfolio = () => {
    this.resetStatesToFalse()
    this.setState(
      { showPortfolio: true }
    )
  }

  showBlog = () => {
    this.resetStatesToFalse()
    this.setState(
      { showBlog: true }
    )
  }

  resetStatesToFalse = () => {
    this.setState({
      showSkills: false,
      showAbout: false,
      showPortfolio: false,
      showBlog: false
       }
    );
  }

  setClass = (content) => {
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
          <div id="about" onClick={ this.showAbout } className={ this.setClass(this.state.showAbout) + " col-sm-offset-2 col-sm-2" }>
            <h2>About</h2>
          </div>
          <div id="skills" onClick={ this.showSkills } className={ this.setClass(this.state.showSkills) + " col-sm-2" }>
            <h2>Skills</h2>
          </div>
          <div id="portfolio" onClick={ this.showPortfolio } className={ this.setClass(this.state.showPortfolio) + " col-sm-2" }>
            <h2>Portfolio</h2>
          </div>
          <div id="blog" onClick={ this.showBlog } className={ this.setClass(this.state.showBlog) + " col-sm-2" }>
            <h2>Blog</h2>
          </div>
        </div>
        <div className="root">
          { this.state.showAbout ? <About /> : null }
          { this.state.showSkills ? <Skills /> : null }
          { this.state.showPortfolio ? <Portfolio /> : null }
          { this.state.showBlog ? <Blog /> : null }
        </div>
      </div>
    )
  }
}

export default App;
