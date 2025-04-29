import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.dashboard.categories);

  // Flatten all widgets from all categories
  const allWidgets = categories.flatMap(c => 
    c.widgets.map(w => ({ ...w, categoryId: c.id }))
  );

  // Filter widgets based on query
  const filteredWidgets = allWidgets.filter(w => 
    w.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-6">
      <input
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        placeholder="Search Widgets"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {query && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map(widget => (
              <Widget key={widget.id} widget={widget} categoryId={widget.categoryId} />
            ))
          ) : (
            <p className="text-gray-500">No widgets found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
