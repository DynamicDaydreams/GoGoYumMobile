import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducer';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(sagas);

const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});