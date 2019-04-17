import React, { Component } from 'react';
import '../css/graph.css';
import ActualGraph from './ActualGraph';
import Header from './Header';
import ProgressBar from './ProgressBar';
export default class Graph extends Component {
  render() {
    return (
      <div className='graph-container'>
        <Header
          dataPoint={this.props.dataPoint}
          interval={this.props.interval}
          changeInterval={this.props.changeInterval}
          pause={this.props.pause}
          start={this.props.start}
          disabled={this.props.disabled}
          changeX={this.props.changeX}
          changeY={this.props.changeY}
          changeZ={this.props.changeZ}
        />
        <div className='graph-graph'>
          <ActualGraph data={this.props.data} />
        </div>
        <ProgressBar progress={this.props.progress} />
      </div>
    );
  }
}
