import {Button, Input} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAnswer,
  falseSuccess,
  toggleSuccess,
} from '../../actions/clientActions';

export default function Questions(props) {
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState('');
  const success = useSelector((state) => state.clientData.success);
  const itemid = useSelector((state) => state.clientData.itemid);

  const currentId = props.questions.id;
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.placeItem}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.questions.title}</Text>
          <Input
            label={'Your Answer'}
            value={answer}
            onChangeText={setAnswer}
            multiline
            textAlignVertical="top"
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <View style={styles.buttonContainer}>
            {success === false && itemid === currentId ? (
              <ActivityIndicator size="large" color="greys" />
            ) : (
              <Button
                onPress={() => {
                  if (!answer.replace(/\s/g, '').length) {
                    setError("Answer can't be empty.");
                    return;
                  }
                  dispatch(falseSuccess(props.questions.id));
                  dispatch(
                    addAnswer(
                      props.questions.id,
                      props.questions.title,
                      answer,
                    ),
                  );
                  setError(null);
                }}>
                Submit
              </Button>
            )}
          </View>
        </View>
      </View>
      {success === true && (
        <Modal
          transparent={true}
          visible={success}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Answer submitted. You can edit if you wish.
              </Text>

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  dispatch(toggleSuccess());
                }}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  errorText: {color: 'red'},
  placeItem: {
    borderColor: '#ccc',
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#666',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
