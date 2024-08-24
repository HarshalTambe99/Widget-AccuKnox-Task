import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddWidgetForm = ({ category }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addWidget = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_WIDGET',
            payload: { name, text, category },
        });
        setName('');
        setText('');
    };

    return (
        <form onSubmit={addWidget} className="add-widget-form">
            <input
                type="text"
                placeholder="Widget Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Widget Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">Add Widget</button>
        </form>
    );
};

export default AddWidgetForm;
