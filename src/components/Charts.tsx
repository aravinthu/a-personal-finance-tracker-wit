import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const Charts = ({ data }) => (
  <LineChart width={500} height={300} data={data}>
    <Line type='monotone' dataKey='amount' stroke='#8884d8' />
    <CartesianGrid stroke='#ccc' />
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
  </LineChart>
);