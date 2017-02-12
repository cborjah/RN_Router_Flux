import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './components/scarletScreen';
import GreyScreen from './components/greyScreen';

import BlueScreen from './components/blueScreen';
import MaizeScreen from './components/maizeScreen';

import GoldScreen from './components/goldScreen';
import BlackScreen from './components/blackScreen';

import ModalScreen from './components/modalScreen.js';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="tabbar"
          tabs // Creates tabs, equivalent to tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
        >
          <Scene key="osu" title="OSU" icon={TabIcon}>
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

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
              initial // Sets startup scene, equivalent to initial={true}
            />

            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
              initial // Sets startup scene, equivalent to initial={true}
            />

            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>

        <Scene
          key="modal"
          component={ModalScreen}
          title="Modal" // Not necessary
          direction="vertical" // This differentiates modals from other types of scenes
          hideNavBar // hideNavBar={true}
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
