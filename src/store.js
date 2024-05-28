import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';
import { gameReducer, fieldReducer } from './reducers';

const reducer = combineReducers({
    gameState: gameReducer,
    fieldState: fieldReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
