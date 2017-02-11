import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './components/scarletScreen';
import GreyScreen from './components/greyScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
      
        <Scene
          key="scarlet"
          component={ScarletScreen}
          title="Scarlet"
          initial // Sets startup scene, equivalent to initial={true}
          />

        <Scene
          key="grey"
          component={GreyScreen}
          title="Grey"
          />

      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
