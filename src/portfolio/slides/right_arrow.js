import React from 'react'

const rightArrow = (props) => {
  return(
    <div onClick={ props.nextSlide }>
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  )
}

export default rightArrow;
