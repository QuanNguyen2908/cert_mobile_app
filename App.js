import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './src/App/Navigators';
import {Provider} from 'react-redux';
import store from './src/App/Stores';
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
