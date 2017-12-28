import React, { Component } from 'react';
import SlideOne from './slides/slide_one'
import SlideTwo from './slides/slide_two'
import LeftArrow from './slides/left_arrow'
import RightArrow from './slides/right_arrow'

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide() {
    this.setState({
      slideCount: this.state.slideCount + 1
    });
  }

  previousSlide() {
    this.setState({
      slideCount: this.state.slideCount - 1
    });
  }

  render() {
    return (
      <div className="slider">
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        <RightArrow nextSlide={ this.nextSlide } />
        <LeftArrow previousSlide={ this.previousSlide } />
      </div>
    );
  }
}
