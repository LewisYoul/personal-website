import React, { Component } from 'react'
import TwoImage from './TwoImage'

class Skills extends Component {
  render(){
    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Skills <span>]</span></strong></h1>
        <hr></hr>
        <TwoImage
          imageUrl1="https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png"
          imageUrl2="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png"
        />
        <hr></hr>
        <TwoImage
          imageUrl1="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          imageUrl2="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png"
        />
        <hr></hr>
        <TwoImage
          imageUrl1="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
          imageUrl2="https://vignette.wikia.nocookie.net/howtoprogram/images/a/a9/CSS3.png/revision/latest/scale-to-width-down/342?cb=20130422012035"
        />
        <TwoImage
          imageUrl1="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
          imageUrl2="https://i.pinimg.com/564x/30/8a/16/308a16d88daefd38eb305755fc4d9794--logo-google-stickers.jpg"
        />
      </div>
    )
  }
}

export default Skills;
