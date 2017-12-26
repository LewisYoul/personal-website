import React, { Component } from 'react'

class Skills extends Component {
  render(){
    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Skills <span>]</span></strong></h1>
        <hr></hr>
        <div className="row">
          <div className="col-md-10 col-sm-offset-1 text-left">
            <h3><strong>Who am I?</strong></h3>
            <hr></hr>
            <p>Before embarking on a career in web development I worked as a scientist studying the microbiota of animals. Using the analysis program R prompted me to delve farther into the coding depths. I have since spent some time honing my skills in development, pecifically through learning Ruby in preparation for Makers Academy which I will begin in October.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
