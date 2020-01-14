import { createStore, applyMiddleware } from 'redux';
import rpm from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import reducers from './reducers/index';

const logger = createLogger();
const enhancers = applyMiddleware(logger, rpm);
const store = createStore(reducers, enhancers);

store.subscribe(() => {
    // console.log('state updated')
})

export default store;
