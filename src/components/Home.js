import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'
import { NavigationEvents } from 'react-navigation'

const Home = props => {
  const debugCourse = {
    name: 'Laajalahti',
    par: [3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5]
  }
  debug = false
  clear = false
  const [scorecards, setScorecards] = useState({})

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log(e)
    }
    console.log('Cleared.')
  }
  if (clear) {
    clearStorage()
  }

  const fetchScorecards = async () => {
    try {
      await AsyncStorage.getItem('@Scorecards').then(allScorecards => {
        setScorecards(JSON.parse(allScorecards))
      })
    } catch (error) {
      console.log(error)
    }
  }

  const renderScorecards = () => {
    if (_.isEmpty(scorecards)) {
      return (
        <Text style={[styles.center, styles.infoText]}>
          Sinulla ei ole vielä yhtään tuloskorttia!
        </Text>
      )
    } else {
      return _.map(scorecards, (card, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() =>
              props.navigation.navigate('ScorecardScreen', {
                course: card.course,
                scores: card.scores
              })
            }
          >
            <Text style={styles.listItemText}>{card.course.name}</Text>
          </TouchableOpacity>
        )
      })
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <NavigationEvents onWillFocus={() => fetchScorecards()} />
        {renderScorecards()}
      </ScrollView>
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

Home.navigationOptions = ({ navigation }) => ({
  title: 'Fribailua',
  headerTitleStyle: {
    fontSize: 24
  },
  headerTintColor: '#fff',

  headerStyle: {
    backgroundColor: '#00c0fa'
  }
})

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
  },
  listItem: {
    height: 70,
    borderColor: '#d9d9d9',
    borderWidth: 2,
    padding: 10,
    margin: 10
  },
  listItemText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default Home
