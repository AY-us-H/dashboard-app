import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';

const Category = ({ category }) => {
  const [showForm, setShowForm] = useState(false);
  const [manageWidgets, setManageWidgets] = useState(false);

  const dispatch = useDispatch();

  const handleCheckboxChange = (widgetId, checked) => {
    if (!checked) {
      dispatch(removeWidget({ categoryId: category.id, widgetId }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <div className="space-x-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Widget
          </button>
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            onClick={() => setManageWidgets(!manageWidgets)}
          >
            Manage Widgets
          </button>
        </div>
      </div>

      {showForm && <AddWidgetForm categoryId={category.id} closeForm={() => setShowForm(false)} />}

      {manageWidgets && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h3 className="text-lg font-semibold mb-2">Manage Widgets</h3>
          <ul className="space-y-2">
            {category.widgets.map(widget => (
              <li key={widget.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  defaultChecked
                  onChange={(e) => handleCheckboxChange(widget.id, e.target.checked)}
                />
                <span>{widget.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map(w => (
          <Widget key={w.id} widget={w} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
