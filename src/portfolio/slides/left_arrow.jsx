import React from 'react'

const leftArrow = (props) => {
  return(
    <div onClick={ props.previousSlide }>
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
  )
}

export default leftArrow;
