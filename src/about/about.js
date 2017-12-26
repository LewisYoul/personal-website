import React, {Component} from 'react'

class About extends Component {

  render(){
    return(
      <div className="component text-center">
          <img src="https://lewisyoul.github.io/images/profile_pic_square.jpg" className="headshot-size img-responsive center-block"></img>
          <h1><strong><span>[</span> Lewis Youl <span>]</span></strong></h1>
            <div class="row">
          <div class="col-md-6 padding-about">
            <h3><strong>Who am I?</strong></h3>
            <hr></hr>
            <p>Before embarking on a career in web development I worked as a scientist studying the microbiota of animals. Using the analysis program R prompted me to delve farther into the coding depths. I have since spent some time honing my skills in development, pecifically through learning Ruby in preparation for Makers Academy which I will begin in October.</p>
          </div>
          <div class="col-md-6 padding-about">
            <p>Now I find things like this funny...</p>
            <img src="https://i2.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2015/03/3.png?resize=360%2C299&ssl=1" class="img-responsive center-block"></img>
          </div>
      </div>
    </div>
    );
  }
}

export default About;
