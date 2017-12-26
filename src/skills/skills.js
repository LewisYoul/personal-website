import React, { Component } from 'react'

class Skills extends Component {
  render(){
    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Skills <span>]</span></strong></h1>
        <hr></hr>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-left">
            <div className="col-sm-6">
              <img className="skill-logo center-block" src="https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png"></img>
            </div>
            <div className="col-sm-6">
              <img className="skill-logo center-block" src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png"></img>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-left">
            <div className="col-sm-6">
              <img className="skill-logo center-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
            </div>
            <div className="col-sm-6">
              <img className="skill-logo center-block" src="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png"></img>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-left">
            <div className="col-sm-6">
              <img className="skill-logo center-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
            </div>
            <div className="col-sm-6 text-center">
              <h2><strong>Node JS</strong></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
