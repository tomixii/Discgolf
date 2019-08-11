import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Modal from "react-native-modal";
import _ from 'lodash'
import allPlayers from './../data/players.json'

const PlayerPicker = () => {
  const [newName, setNewName] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [currPlayers, setCurrPLayers] = useState([])

  const renderAllPlayers = () => {
    return _.map(allPlayers, player => {
      return <View style={styles.playerSelectable}>
        <Text style={styles.playerText}>{player}</Text>
      </View>
    })
  }

  return (
    <View style={styles.mainContainer}>
      <Modal isVisible={isAdding} >
        <View style={styles.modalStyle}>

        <TextInput
          style={styles.nameInput}
          onChange={name => setNewName(name)}
          value={newName}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsAdding(false)}
        >
          <Text style={styles.buttonText}>LISÄÄ PELAAJA</Text>
        </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.row}>
        <View style={styles.playerList}>

          {renderAllPlayers()}
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity
              style={styles.playButton}
              onPress={() => props.navigation.navigate('CurrentGame')}
          >
            <Text style={styles.playButtonText}>PELAA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roundButton]}
            onPress={() => setIsAdding(true)}
          >
            <Text style={[styles.center, styles.buttonText]}>+</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  row: {
    flex:1,
    flexDirection: 'row'
  },
  playButton: {
    width: 70,
    backgroundColor: '#00c0fa',
    margin:10,
    elevation: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playButtonText: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold'
  },
  roundButton: {
    backgroundColor: '#00c0fa',
    borderRadius: 40,
    height: 80,
    width: 80,
    margin: 10,
    elevation: 8
  },
  playerList: {
    flex: 3
  },
  playerSelectable: {
    margin: 10,
    borderColor: '#d9d9d9',
    borderWidth: 2,
    padding: 10
  },
  playerText: {
    fontSize: 20
  },
  modalStyle: {
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  nameInput: {
    height: 40,
    margin: 10,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 2
  },
  addButton: {
    backgroundColor: '#00c0fa',
    height: 50,
    padding: 10,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 20,
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
