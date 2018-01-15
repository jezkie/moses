import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

export default createStore (
    combineReducers({
    }),
    applyMiddleware(
        logger, reduxThunk,
    )
)