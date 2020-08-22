import React, {useState} from 'react';
import {Layout, Text, Button, Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export default function ClientLogin(props) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const userpassword = '123456';
  const username = 'clienttest';

  const loginHandler = () => {
    if (userpassword !== password && username !== name) {
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
      <Input
        autoCapitalize="none"
        label={'Username'}
        value={name}
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      {nameError && <Text>{nameError}</Text>}
      <Input
        autoCapitalize="none"
        label={'Password'}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      {passwordError && <Text>{passwordError}</Text>}
      <Button onPress={loginHandler}>Login</Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  padding: {paddingTop: 26},
});
