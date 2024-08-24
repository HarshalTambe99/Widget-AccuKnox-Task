import { createStore } from 'redux';

const initialState = {
    categories: {
        'CSPM Executive Dashboard': [
            { id: 1, name: 'Widget 1', text: 'This is widget 1 text.' },
            { id: 2, name: 'Widget 2', text: 'This is widget 2 text.' },
        ],
        'Another Dashboard': []
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.payload.category]: [
                        ...state.categories[action.payload.category],
                        {
                            id: new Date().getTime(),
                            name: action.payload.name,
                            text: action.payload.text,
                        },
                    ],
                },
            };
        case 'REMOVE_WIDGET':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.payload.category]: state.categories[action.payload.category].filter(widget => widget.id !== action.payload.id),
                },
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
