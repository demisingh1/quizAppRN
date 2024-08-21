import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useQuizContext } from '../hooks/quizContext';

const EndQuizPage = () => {
    const{quizNumber, reset_quiz} = useQuizContext();
  return (
    <View>
      <Text>endQuizPage {quizNumber}</Text>
      <TouchableOpacity onPress={reset_quiz} >
        <Text>Reset Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EndQuizPage

const styles = StyleSheet.create({})