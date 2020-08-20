import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchClients} from '../actions/questionAction';
import ClientListItem from '../screens/ClientListItem';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

export default function ClientListScreen(props) {
  const data = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  return (
    <View style={{flex: 1, paddingTop: 60, paddingHorizontal: 15}}>
      <Text style={{alignSelf: 'center', fontSize: 35, fontWeight: 'bold'}}>
        Clients
      </Text>
      <FlatList
        style={{flex: 1}}
        data={data.clients}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ClientListItem data={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}
ClientListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
