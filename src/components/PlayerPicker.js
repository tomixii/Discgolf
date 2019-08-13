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
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'
import allPlayersDB from './../data/players.json'

const PlayerPicker = props => {
  const [newName, setNewName] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [selectedPlayers, setSelectedPlayers] = useState({})
  const [allPlayers, setAllPlayers] = useState(allPlayersDB)

  const handlePlayerPress = (player, isSelected) => {
    console.log(player, isSelected)
    if (isSelected) {
      setSelectedPlayers(_.omit(selectedPlayers, player.name))
    } else {
      setSelectedPlayers({ ...selectedPlayers, ...{ [player.name]: player } })
    }
  }

  const handleAddPlayer = () => {
    setAllPlayers({ ...allPlayers, ...{ newName: { name: newName } } })
    setIsAdding(false)
  }

  const renderAllPlayers = () => {
    console.log(selectedPlayers)
    const playerJSX = []
    _.forEach(allPlayers, player => {
      const isSelected = _.has(selectedPlayers, player.name)
      console.log(player, isSelected)
      playerJSX.push(
        <TouchableOpacity
          style={[
            styles.playerSelectable,
            { backgroundColor: isSelected ? '#00c0fa' : 'white' }
          ]}
          onPress={() => handlePlayerPress(player, isSelected)}
          key={player.name}
        >
          <Text
            style={[
              styles.playerText,
              { color: isSelected ? 'white' : 'black' }
            ]}
          >
            {player.name}
          </Text>
        </TouchableOpacity>
      )
    })
    return playerJSX
  }

  return (
    <View style={styles.mainContainer}>
      <Modal isVisible={isAdding}>
        <View style={styles.modalStyle}>
          <TextInput
            style={styles.nameInput}
            onChangeText={name => setNewName(name)}
            value={newName}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddPlayer()}
          >
            <Text style={styles.buttonText}>LISÄÄ PELAAJA</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.playerList}>{renderAllPlayers()}</View>

      <TouchableOpacity
        style={[styles.roundButton, styles.playButton]}
        onPress={() =>
          props.navigation.navigate('CurrentGame', {
            course: props.navigation.getParam('course'),
            players: selectedPlayers
          })
        }
      >
        <Icon name="play" size={30} color="#fff" style={styles.center} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.roundButton, styles.plusButton]}
        onPress={() => setIsAdding(true)}
      >
        <Text style={[styles.center, styles.plusButtonText]}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  playButton: {
    position: 'absolute',
    right: 10,
    bottom: 80
  },
  plusButtonText: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold'
  },
  plusButton: {
    position: 'absolute',
    right: 80,
    bottom: 10
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
    padding: 15
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
