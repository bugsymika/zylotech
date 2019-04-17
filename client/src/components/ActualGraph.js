import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
export default class ActualGraph extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <LineChart
          data={this.props.data}
          margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='time' />
          <YAxis interval={1} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='x'
            stroke='#8884d8'
            strokeWidth={4}
            dot={{ stroke: '#8884d8', strokeWidth: 4 }}
          />
          <Line
            type='monotone'
            dataKey='y'
            stroke='#82ca9d'
            strokeWidth={4}
            dot={{ stroke: '#82ca9d', strokeWidth: 4 }}
          />
          <Line
            type='monotone'
            dataKey='z'
            stroke='#ff0000'
            strokeWidth={4}
            dot={{ stroke: '#ff0000', strokeWidth: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
