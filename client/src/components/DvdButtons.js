import React from 'react';

export default function DvdButtons(props) {
  return (
    <div className='dvd-buttons'>
      <button
        disabled={props.disabled === false}
        onClick={() => props.changeInterval(-1)}
      >
        <i className='fas fa-backward' />
      </button>

      <button onClick={props.pause} disabled={props.disabled === true}>
        <i className='fas fa-pause' />
      </button>

      <button onClick={props.start} disabled={props.disabled === false}>
        <i className='fas fa-play' />
      </button>

      <button
        onClick={() => props.changeInterval(1)}
        disabled={props.disabled === false}
      >
        <i className='fas fa-forward' />
      </button>
    </div>
  );
}
