import React, {Component} from 'react'
import Slider from './slider'

class Portfolio extends Component {

  render(){
    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Portfolio <span>]</span></strong></h1>
        <hr></hr>
        <div className="row">
          <div className="col-md-10 col-sm-offset-1 text-left">
            <Slider />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
