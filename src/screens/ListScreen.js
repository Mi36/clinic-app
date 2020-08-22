import React, {useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchClients} from '../actions/questionAction';
import ItemScreen from '../screens/ItemScreen';
import {Text} from '@ui-kitten/components';

export default function ListScreen(props) {
  const data = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clients</Text>
      <FlatList
        style={styles.flex}
        data={data.clients}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ItemScreen data={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  text: {alignSelf: 'center', fontSize: 35, fontWeight: 'bold'},
  flex: {flex: 1},
});

ListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
