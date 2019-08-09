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

const CourseContainer = props => {
  return (
    <TouchableOpacity
      style={styles.courseContainer}
      onPress={() =>
        props.navigation.navigate('PlayerPicker', {
          course: props.course
        })
      }
    >
      <Text style={styles.courseName}>{props.course.name}</Text>
      <Text>{props.course.par.length} väylää</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    margin: 10,
    height: 60,
    width: '45%',
    padding: 5
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold'
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

export default CourseContainer
