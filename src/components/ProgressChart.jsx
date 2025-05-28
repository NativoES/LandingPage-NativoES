import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', weight: 180 },
  { date: '2024-02', weight: 178 },
  { date: '2024-03', weight: 175 },
  { date: '2024-04', weight: 173 },
  { date: '2024-05', weight: 171 },
];

export function ProgressChart() {
  return (
    <div className="h-[400px] w-full bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Weight Progress</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}