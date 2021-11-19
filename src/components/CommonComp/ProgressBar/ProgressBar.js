import React, { useEffect, useState } from 'react';
import useScrollStatus from '../../hooks/useScrollStatus';

const ProgressBar = () => {
  const scrollPosition = useScrollStatus();

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '10px',
    background: 'linear-gradient( to right, #595cff , #c6f8ff)',
    zIndex: 1,
  }
  return (
    <div>
      <div className='progressBar'>
        <div style={{ ...style, width: `${scrollPosition == 0 ? scrollPosition : scrollPosition + 0.9}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar