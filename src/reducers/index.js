import {combineReducers} from 'redux';

const setReducer = (state="",action) => {
    switch(action.type) {
        case 'ADD':
            return [...state,{name: action.name}]
        default: 
         return state;
    }
}

const passwordReducer = (state="",action) => {
    switch(action.type) {
        case 'PASSWORD':
            return [...state,{name: action.name}]
        default: 
         return state;
    }
}

const allReducers = combineReducers({
    set:setReducer
});

export default allReducers;