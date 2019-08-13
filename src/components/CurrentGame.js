import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import _ from 'lodash'

import Icon from 'react-native-vector-icons/FontAwesome'

const CurrentGame = props => {
  const course = props.navigation.getParam('course')
  const players = props.navigation.getParam('players')
  const [currentHole, setCurrentHole] = useState(0)
  const [scores, setScores] = useState(
    _.mapValues(players, p => {
      return {
        ...p,
        score: course.par
      }
    })
  )

  const countScore = score => {
    _.sum(_.zipWith(score, course.par, (score, par) => score - par))
  }

  const decreaseScore = player => {
    const newScore = _.clone(player.score)
    newScore[currentHole] = Math.max(newScore[currentHole] - 1, 1)
    setScores({
      ...scores,
      [player.name]: { ...player, score: newScore }
    })
  }

  const increaseScore = player => {
    console.log(scores)
    const newScore = _.clone(player.score)
    newScore[currentHole]++
    setScores({
      ...scores,
      [player.name]: { ...player, score: newScore }
    })
  }

  const renderPlayers = () => {
    return _.map(scores, player => {
      console.log(scores)
      console.log(player)
      return (
        <View style={[styles.row, styles.playerContainer]} key={player.name}>
          <View>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text>{countScore(player.score)}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.scoreControl, styles.center]}
              onPress={() => decreaseScore(player)}
            >
              <Text style={styles.scoreControlText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.playerName}>{player.score[currentHole]}</Text>
            <TouchableOpacity
              style={[styles.scoreControl, styles.center]}
              onPress={() => increaseScore(player)}
            >
              <Text style={styles.scoreControlText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    })
  }

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.row,
          { borderBottomColor: '#d9d9d9', borderBottomWidth: 2 }
        ]}
      >
        <Text style={styles.mainText}>Väylä: {currentHole + 1}</Text>
        <Text style={styles.mainText}>PAR: {course.par[currentHole]}</Text>
      </View>
      {renderPlayers()}
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            margin: 20
          }
        ]}
      >
        <TouchableOpacity
          onPress={() => setCurrentHole(Math.max(currentHole - 1, 0))}
        >
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCurrentHole(Math.min(currentHole + 1, course.par.length - 1))
          }
        >
          <Icon name="arrow-right" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  center: {
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  row: {
    flexDirection: 'row'
  },
  mainText: {
    flex: 1,
    fontSize: 40,
    padding: 10
  },
  playerContainer: {
    height: 80,
    margin: 10,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  playerName: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  scoreControl: {
    height: 25,
    width: 25,
    borderRadius: 20,
    backgroundColor: '#00c0fa',
    elevation: 4,
    margin: 10
  },
  scoreControlText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default CurrentGame
