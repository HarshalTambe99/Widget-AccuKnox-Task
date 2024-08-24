import React from 'react';
import { useDispatch } from 'react-redux';

const Widget = ({ widget, category }) => {
    const dispatch = useDispatch();

    const removeWidget = () => {
        dispatch({
            type: 'REMOVE_WIDGET',
            payload: { id: widget.id, category },
        });
    };

    return (
        <div className="widget">
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
            <button onClick={removeWidget}>Remove</button>
        </div>
    );
};

export default Widget;
