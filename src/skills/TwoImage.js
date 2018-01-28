import React, { Component } from 'react'

class TwoImage extends Component {

  render() {
    return(
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 text-left">
          <div className="col-sm-6">
            <img className="skill-logo center-block" src={this.props.imageUrl1}></img>
          </div>
          <div className="col-sm-6">
            <img className="skill-logo center-block" src={this.props.imageUrl2}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default TwoImage;
