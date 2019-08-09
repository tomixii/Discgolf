import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity
} from 'react-native'
import players from './players'

const PlayerPicker = () => {
  const [newName, setNewName] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const renderPlayerList = () => {}

  return (
    <View style={styles.mainContainer}>
      <Modal animationType="slide" visible={isAdding}>
        <TextInput
          style={styles.nameInput}
          onChange={name => setNewName(name)}
          value={newName}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsAdding(false)}
        >
          <Text>Lisää pelaaja</Text>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        style={[styles.roundButton]}
        onPress={() => setIsAdding(true)}
      >
        <Text style={[styles.center, styles.buttonText]}>+</Text>
      </TouchableOpacity>
      {renderPlayerList()}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },

  roundButton: {
    backgroundColor: '#00c0fa',
    borderRadius: 40,
    height: 80,
    width: 80,
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 8
  },
  nameInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    flex: 1
  },
  addButton: {
    backgroundColor: '#00c0fa',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  center: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PlayerPicker
