import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph';

class App extends Component {
  state = {
    timer: null,
    data: [],
    dataPoint: { time: 'start', x: 1, y: 2, z: 3 },
    interval: 10000,
    progress: 0,
    progressTimer: null
  };

  componentDidMount() {
    this.newPoint();
    this.start();
    console.log('hi');
  }

  start = () => {
    const timer = setInterval(this.newPoint, this.state.interval);
    const progressTimer = setInterval(
      this.progressPercentage,
      this.state.interval / 20
    );
    this.setState({ timer: timer });
    this.setState({ progressTimer: progressTimer });
  };

  pause = () => {
    clearInterval(this.state.timer);
    clearInterval(this.state.progressTimer);
    this.setState({ timer: null });
    this.setState({ progressTimer: null });
    this.setState({ progress: 0 });
  };

  progressPercentage = () => {
    this.setState({ progress: this.state.progress + 5 });
  };

  changeInterval = number => {
    const current = this.state.interval;
    if (current / 1000 === 1 && number === -1) {
      return;
    }
    this.setState({ interval: current + number * 1000 });
  };

  timeStamp = () => {
    const time = new Date();
    const timeStamp =
      time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

    return timeStamp;
  };

  newPoint = () => {
    const stamp = this.timeStamp();
    this.setState({
      dataPoint: { ...this.state.dataPoint, time: stamp }
    });

    if (this.state.data.length === 30) {
      this.setState({
        data: [...this.state.data.slice(1), this.state.dataPoint]
      });
    } else {
      this.setState({ data: [...this.state.data, this.state.dataPoint] });
    }
    this.setState({ dataPoint: { time: '', x: 1, y: 2, z: 3 } });
    this.setState({ progress: 0 });
  };

  changeX = number => {
    const current = this.state.dataPoint.x;
    this.setState({
      dataPoint: { ...this.state.dataPoint, x: current + number }
    });
  };

  changeY = number => {
    const current = this.state.dataPoint.y;
    this.setState({
      dataPoint: { ...this.state.dataPoint, y: current + number }
    });
  };

  changeZ = number => {
    const current = this.state.dataPoint.z;
    this.setState({
      dataPoint: { ...this.state.dataPoint, z: current + number }
    });
  };

  render() {
    return (
      <div className='App'>
        <Graph
          data={this.state.data}
          changeX={this.changeX}
          changeY={this.changeY}
          changeZ={this.changeZ}
          dataPoint={this.state.dataPoint}
          interval={this.state.interval}
          changeInterval={this.changeInterval}
          start={this.start}
          pause={this.pause}
          disabled={this.state.timer === null}
          progress={this.state.progress}
        />
      </div>
    );
  }
}

export default App;
