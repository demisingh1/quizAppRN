import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuizContext } from '../hooks/quizContext';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Choises = ({item}) => {
 const{selected_answer, correct } = useQuizContext()
  return (
    <View style = {selected_answer === null ? "" : correct === item.toLowerCase().trim(" ") ? styles.right : ""}>
          <Text>
            {item}
          </Text>
          
    </View>
  )
}

export default Choises

const styles = StyleSheet.create({
  
  right:{backgroundColor:'green',display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: "30",
    width: width - 20,
    borderRadius: 15,
    padding: 10,
    elevation:5 },
    wrong:{backgroundColor:'red',display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      height: "30",
      width: width - 20,
      borderRadius: 15,
      padding: 10,
      elevation:5},
})