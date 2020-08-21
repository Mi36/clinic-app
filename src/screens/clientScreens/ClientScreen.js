import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Platform, View} from 'react-native';
import Questions from './Questions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestionClient} from '../../actions/clientActions';
import {Layout, Button} from '@ui-kitten/components';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default function ClientScreen({navigation}) {
  const data = useSelector((state) => state.clientData.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionClient());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Questions questions={item} />}
          keyboardShouldPersistTaps="handled"
        />
        {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
      </View>
    </SafeAreaView>
  );
}
ClientScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Submit Your Answer',

    headerRight: () => (
      <Button
        onPress={() => {
          navData.navigation.navigate('loginFlow');
        }}>
        Logout
      </Button>
    ),
  };
};
