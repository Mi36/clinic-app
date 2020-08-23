import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

export default function ClientLogin(props) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const userpassword = '123456';
  const username = 'clienttest';

  const loginHandler = () => {
    if (userpassword === password && username === name) {
      props.navigation.navigate('ClientScreen');
      setPassword('');
      setUsername('');
      setPasswordError(null);
      setNameError(null);
    } else {
      if (password !== userpassword) {
        setPasswordError('Password invalid');
      }
      if (username !== name) {
        setNameError('Usename invalid');
      }
    }
  };
  return (
    <Layout style={styles.padding}>
      <Text style={styles.label}>Username</Text>
      <Input
        autoCapitalize="none"
        value={name}
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      {nameError && <Text style={styles.errorText}>{nameError}</Text>}
      <Text style={styles.label}>Password</Text>
      <Input
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      <Button onPress={loginHandler}>Login</Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  padding: {paddingTop: 15},
  label: {marginLeft: 15, marginBottom: 5},
  errorText: {color: 'red', marginLeft: 15, marginBottom: 3},
});
