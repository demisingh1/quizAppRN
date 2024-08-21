import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useQuizContext } from '../hooks/quizContext'
import { ActivityIndicator } from 'react-native-paper'

const index = () => {
  const navigation = useNavigation()
  const {loading} = useQuizContext();

  if(loading === true){
   return <ActivityIndicator />
  }
  
  return (
    <View style = {styles.homeView}>
      <TouchableOpacity onPress={ ()=> navigation.navigate('quizPage')} style = {styles.touchBtn}>
        <Text style ={styles.hometext} >Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  touchBtn:{backgroundColor:"grey", width:200, height:50, display:'flex', justifyContent:'center',alignItems:'center',borderRadius:20},
  homeView:{flex:1, alignItems:"center",justifyContent:'center'},
  hometext:{color:"white", fontSize:30}
})