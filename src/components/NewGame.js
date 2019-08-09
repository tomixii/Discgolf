import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

const NewGame = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.center, styles.infoText]}>New game</Text>
      <TouchableOpacity />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  center: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    color: 'grey',
    fontSize: 40,
    fontStyle: 'italic'
  }
})

export default NewGame
