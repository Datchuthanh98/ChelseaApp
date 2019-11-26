import React ,{Component} from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

//Redux saga
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'; 

import Navigation from './Navigation'

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);
sagaMiddleware.run(rootSaga);

export default App;