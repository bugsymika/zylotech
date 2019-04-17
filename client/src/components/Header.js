import React from 'react';
import '../css/header.css';
import DvdButtons from './DvdButtons';
import ValueChange from './ValueChange';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='header-values-display'>
        <div>
          <h2 className='header-timer'>
            Currently updating every {props.interval / 1000} seconds
            <DvdButtons
              start={props.start}
              pause={props.pause}
              changeInterval={props.changeInterval}
              disabled={props.disabled}
              interval={props.interval / 1000}
            />
          </h2>
        </div>

        <h2 className='header-values' />
        <h2>
          Next Values:
          <br />
          <span className='header-value blue'> X:{props.dataPoint.x}</span>
          <span className='header-value green'>Y:{props.dataPoint.y}</span>
          <span className='header-value red'>Z:{props.dataPoint.z}</span>
        </h2>
        <div className='graph-value-change-buttons'>
          <ValueChange
            changeValue={props.changeX}
            value={'X: ' + props.dataPoint.x}
            color='#8884d8'
          />
          <ValueChange
            changeValue={props.changeY}
            value={'Y: ' + props.dataPoint.y}
            color='#82ca9d'
          />
          <ValueChange
            changeValue={props.changeZ}
            value={'Z: ' + props.dataPoint.z}
            color='#ff0000'
          />
        </div>
      </div>
    </div>
  );
}
