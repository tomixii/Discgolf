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

const Home = props => {
  const debugCourse = {
    name: 'Laajalahti',
    par: [3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5]
  }
  debug = false

  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.center, styles.infoText]}>
        Sinulla ei ole vielä yhtään tuloskorttia!
      </Text>
      <TouchableOpacity
        style={[styles.roundButton]}
        onPress={() => {
          if (debug) {
            props.navigation.navigate('CurrentGame', {
              course: debugCourse,
              players: {
                'Pelaaja 1': { name: 'Pelaaja 1' },
                'Pelaaja 2': { name: 'Pelaaja 2' }
              }
            })
          } else {
            props.navigation.navigate('CoursePicker')
          }
        }}
      >
        <Text style={[styles.center, styles.buttonText]}>+</Text>
      </TouchableOpacity>
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
  buttonText: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Home
