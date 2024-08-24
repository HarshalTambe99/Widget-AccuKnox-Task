import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Dashboard = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className="dashboard">
            {Object.keys(categories).map(category => (
                <div key={category} className="category">
                    <h2>{category}</h2>
                    <div className="widgets">
                        {categories[category].map(widget => (
                            <Widget key={widget.id} widget={widget} category={category} />
                        ))}
                    </div>
                    <AddWidgetForm category={category} />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
