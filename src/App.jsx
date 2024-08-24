import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <h1>Dynamic Dashboard</h1>
                <Dashboard />
            </div>
        </Provider>
    );
};

export default App;
