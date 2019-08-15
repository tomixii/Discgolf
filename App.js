import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/components/Home'
import NewGame from './src/components/NewGame'
import CurrentGame from './src/components/CurrentGame'
import Game from './src/components/Game'
import PlayerPicker from './src/components/PlayerPicker'
import CoursePicker from './src/components/CoursePicker'
import ScorecardScreen from './src/components/ScorecardScreen'

//const NewGameStack = createStackNavigator({})

const MainStack = createAppContainer(
  createStackNavigator({
    Home: { screen: Home },
    CoursePicker: { screen: CoursePicker },
    PlayerPicker: { screen: PlayerPicker },
    CurrentGame: { screen: CurrentGame },
    Game: { screen: Game },
    ScorecardScreen: { screen: ScorecardScreen }
  })
)

const App = () => {
  return <MainStack />
}

export default App
