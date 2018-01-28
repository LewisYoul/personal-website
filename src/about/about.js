import React, {Component} from 'react'

class About extends Component {

  render(){
    return(
      <div id="about" className="component text-center">
        <img src={require("../images/profile_pic_square.jpg")} className="headshot-size img-responsive"></img>
        <h1><strong><span>[</span> Lewis Youl <span>]</span></strong></h1>
        <hr></hr>
        <div className="row">
          <div className="col-md-10 col-sm-offset-1 text-left">
            <h3><strong>Who am I?</strong></h3>
            <hr></hr>
            <p>Full stack web developer currently studying at Makers Academy, one of the most selective and rigorous development bootcamps in London.</p>
            <hr></hr>
            <p>Having previously worked as a Laboratory Research Scientist I bring the analytical, methodical thinking required in a scientific environment into the code that I write. I enjoy producing Test Driven code that is clean, clear and reproducible. This is with a view to producing a more easily maintainable codebase.</p>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
