import React, {useEffect} from 'react';
import {FlatList, Platform, SafeAreaView, StyleSheet} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestionClient} from '../../actions/clientActions';
import Questions from './Questions';

export default function ClientScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.clientData.questions);

  useEffect(() => {
    dispatch(fetchQuestionClient());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        style={styles.flex}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Questions questions={item} />}
        keyboardShouldPersistTaps="handled"
      />
      {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
