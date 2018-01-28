import React, { Component } from 'react';

const SlideOne= (props) => {
  return (
    <div className="slide">
      <img className="portfolio-image center-block" src={ require("../../images/transgressions.png") }></img>
    </div>
  );
}

export default SlideOne;
