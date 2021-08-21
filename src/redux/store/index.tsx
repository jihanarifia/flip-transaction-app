import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const reducerNew: any = reducer;
export const store = createStore(reducerNew, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
