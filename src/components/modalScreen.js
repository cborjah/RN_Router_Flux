import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; // Actions is used to navigate from scene to scene

// Modal is similiar to the other components, but uses Actions.pop() instead.

const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.pop()}>
        Modal
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8200",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  }
}

export default ModalScreen;
