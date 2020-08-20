import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchClients} from '../actions/questionAction';
import ClientListItem from '../screens/ClientListItem';

export default function ClientListScreen(props) {
  const data = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  return (
    <FlatList
      style={{flex: 1}}
      data={data.clients}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <ClientListItem data={item} navigation={props.navigation} />
      )}
    />
  );
}
