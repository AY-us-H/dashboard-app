import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const data = [
    { name: 'A', value: Math.floor(Math.random() * 100) },
    { name: 'B', value: Math.floor(Math.random() * 100) },
    { name: 'C', value: Math.floor(Math.random() * 100) }
  ];

  const COLORS = ['#6366F1', '#10B981', '#F59E0B'];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm relative">
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
      >
        ×
      </button>
      <h4 className="text-lg font-bold mb-2">{widget.name}</h4>
      <p className="text-sm text-gray-600 mb-4">{widget.text}</p>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Widget;
