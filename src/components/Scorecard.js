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
import _ from 'lodash'

const Scorecard = props => {
  const MAX_PER_ROW = 9
  const cellColors = ['#6adea4', '#00c0fa', '#fff', '#fcbe49', '#f76565']

  const ranking = () => {
    const rankingJSX = []
    _.forIn(props.scores, (playerData, name) => {})
  }

  const scoreList = () => {
    const playerScores = _.mapValues(props.scores, playerData => {
      return _.chunk(playerData.score, MAX_PER_ROW)
    })

    const scoreListJSX = []
    _.map(
      _.range(Math.ceil(props.course.par.length / MAX_PER_ROW)),
      rowNumber => {
        scoreListJSX.push(
          <View style={styles.row} key={rowNumber}>
            <View style={styles.nameCell} />
            {_.map(_.range(9), columnNumber => {
              const hole = columnNumber + rowNumber * MAX_PER_ROW + 1
              return (
                <View style={[styles.cell, styles.center]} key={hole}>
                  <Text style={[styles.cellText, { fontWeight: 'bold' }]}>
                    {hole}
                  </Text>
                </View>
              )
            })}
          </View>
        )
        {
          _.forIn(playerScores, (data, name) => {
            scoreListJSX.push(
              <View style={styles.row} key={name + rowNumber}>
                <View style={styles.nameCell}>
                  <Text style={styles.playerText}>{name}</Text>
                </View>
                {_.map(data[rowNumber], (score, index) => {
                  const plusMinus =
                    score - props.course.par[index + rowNumber * MAX_PER_ROW]

                  return (
                    <View
                      style={[
                        styles.cell,
                        styles.center,
                        { backgroundColor: cellColors[plusMinus + 2] }
                      ]}
                      key={index}
                    >
                      <Text style={styles.cellText}>{score}</Text>
                    </View>
                  )
                })}
              </View>
            )
          })
        }
        scoreListJSX.push(
          <View style={styles.margin} key={'filler' + rowNumber} />
        )
      }
    )
    return scoreListJSX
  }

  return (
    <View style={styles.mainContainer}>
      {ranking()}
      {scoreList()}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  center: {
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    height: 30,
    marginRight: 10,
    marginLeft: 10
  },
  cell: {
    flex: 1,
    textAlign: 'center'
  },
  nameCell: {
    flex: 3
  },
  cellText: {
    fontSize: 20
  },
  playerText: {
    fontSize: 20
  },
  margin: {
    height: 50
  }
})

export default Scorecard
