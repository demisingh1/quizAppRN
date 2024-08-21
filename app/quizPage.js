import '../constants/app.css'
import {  Dimensions,  StyleSheet,  Text,  TouchableOpacity,  View,} from "react-native";
import React from "react";
import { useQuizContext } from "../hooks/quizContext";
import EndQuizPage from "./EndQuizPage";
import Choises from '../components/Choises';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const quizPage = () => {
  const { currentQuiz, nextQuiz, quizEnd,quiz,quizNumber,scores, shuffleOptions = [],trigger_ans,} = useQuizContext();
  let correct = currentQuiz?.correct.toLowerCase().trim(" ")
  console.log(correct, "correct anwer");
  
  if (quizEnd === true) {
    return <EndQuizPage />;
  }
  return (
    <View>
      <View style = {styles.header}>
        <Text>{quiz.length} / {quizNumber + 1}</Text>
        <Text>Score:{scores}</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          height: height - 200,
        }}
      >
        <Text style = {styles.question}>{currentQuiz?.question}</Text>
        
          {shuffleOptions?.map((item,index)=> {
           return <TouchableOpacity onPress={()=>trigger_ans(item)} style = {styles.options} key={index} >
              <Choises item={item} correct ={correct}/>
            </TouchableOpacity>
           })}
        
       
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            width: width - 100,
            justifyContent: 'center'
          }}
        >
          
          <TouchableOpacity
            style={{
              backgroundColor: "#FAF9F6", width: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              padding: 10,
            }}
            onPress={nextQuiz}
          >
            <Text style={styles.textSize}>Right</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default quizPage;

const styles = StyleSheet.create({
  header:{display:'flex', flexDirection:'row', justifyContent:'space-around',alignItems:'center'},
  question:{backgroundColor:'white', height:200,width:width - 20, borderRadius:25,padding:20,textAlign:'center',elevation:5},
  options: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
     backgroundColor: "#FAF9F6",
    height: "30",
    width: width - 20,
    borderRadius: 15,
    padding: 10,
    elevation:5
  },
  textSize: { fontSize: 16 },
});
