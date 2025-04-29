import React from 'react';
import { Provider, useSelector } from 'react-redux';
import Category from './Category';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  return (
      
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <SearchBar />
      <div className="space-y-8">
        {categories.map(cat => (
          <Category key={cat.id} category={cat} />
        ))}
      </div>
    </div>

  );
};

export default Dashboard;
