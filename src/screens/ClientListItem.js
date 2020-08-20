import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ClientListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('ClientAnswers', {
          itemId: props.data.id,
        });
      }}>
      <View style={styles.placeItem}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.data.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
