import { createStore, combineReducers } from 'redux';

const test = (state="", action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

const reducers = combineReducers({
    test,
});

let store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;