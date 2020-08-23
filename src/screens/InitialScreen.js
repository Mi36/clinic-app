import {Button} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function InitialScreen(props) {
  return (
    <View style={styles.container}>
      <Button
        style={{}}
        onPress={() => {
          props.navigation.navigate('Admin Login');
        }}>
        Admin
      </Button>
      <Button
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Client Login');
        }}>
        Client Section
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    marginVertical: 16,
  },
});

InitialScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
