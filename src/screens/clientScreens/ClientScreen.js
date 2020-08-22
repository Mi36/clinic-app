import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Platform, StyleSheet} from 'react-native';
import Questions from './Questions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestionClient} from '../../actions/clientActions';
import KeyboardSpacer from 'react-native-keyboard-spacer';

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
