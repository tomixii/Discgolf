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
import CourseContainer from './CourseContainer'
import courses from './../data/courses.json'

const CoursePicker = props => {
  const renderCourses = () => {
    return _.map(courses, course => {
      return (
        <CourseContainer
          course={course}
          key={course.name}
          navigation={props.navigation}
        />
      )
    })
  }

  return <View style={styles.allCourses}>{renderCourses()}</View>
}

const styles = StyleSheet.create({
  allCourses: {
    flexWrap: 'wrap',
    flexDirection: 'row'
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

export default CoursePicker
