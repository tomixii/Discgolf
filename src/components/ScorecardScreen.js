import React from 'react'
import _ from 'lodash'
import Scorecard from './Scorecard'

const ScorecardScreen = props => {
  const course = props.navigation.getParam('course')
  const scores = props.navigation.getParam('scores')
  return <Scorecard scores={scores} course={course} />
}

ScorecardScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('course').name,
  headerTitleStyle: {
    fontSize: 24
  },
  headerTintColor: '#fff',

  headerStyle: {
    backgroundColor: '#00c0fa'
  }
})

export default ScorecardScreen
