import React, {useState} from 'react';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

export default function ClientLogin(props) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const userpassword = '123456';
  const username = 'clienttest';

  const loginHandler = () => {
    if (userpassword === password && username === name) {
      props.navigation.navigate('clientFlow');
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
    <Layout style={{paddingTop: 26}}>
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
