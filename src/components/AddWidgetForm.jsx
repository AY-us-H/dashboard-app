import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';
import { v4 as uuidv4 } from 'uuid';

const AddWidgetForm = ({ categoryId, closeForm }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newWidget = { id: uuidv4(), name, text };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Widget Name"
        required
      />
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Widget Text"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add
      </button>
    </form>
  );
};

export default AddWidgetForm;
