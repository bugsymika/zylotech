import React from 'react';
import '../css/progressbar.css';
export default function ProgressBar(props) {
  const outerBarStyle = {
    width: props.progress + 'vw'
  };

  return <div className='outerBar' style={outerBarStyle} />;
}
