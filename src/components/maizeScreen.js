import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; // Actions is used to navigate from scene to scene

const MaizeScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.blue()}
      >
        Maize Screen
      </Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5DE98",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  }
}

export default MaizeScreen;
