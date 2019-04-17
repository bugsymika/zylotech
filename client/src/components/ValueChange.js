import '../css/valuechange.css';

import React from 'react';

export default function ValueChange(props) {
  const color = { color: props.color };
  return (
    <div className='value-change-container'>
      <button onClick={() => props.changeValue(-5)}>
        <i className='fas fa-angle-double-left' />
      </button>
      <button onClick={() => props.changeValue(-1)}>
        <i className='fas fa-angle-left' />
      </button>
      <span className='value-change-value' style={color}>
        {props.value}
      </span>
      <button onClick={() => props.changeValue(+1)}>
        {' '}
        <i className='fas fa-angle-right' />
      </button>
      <button onClick={() => props.changeValue(+5)}>
        {' '}
        <i className='fas fa-angle-double-right' />
      </button>
    </div>
  );
}
