import axios, { Axios } from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { END_QUIZ, LOAD_QUIZS, LOADING_SCREEN, NEXT_QUIZ, RESET_QUIZ, SELECT_ANS, STOP_LOADING } from "./actions";
import reducer from "./QuizReducer";
import { useNavigation } from "expo-router";
import { randomOptions } from "../constants/randomOptions";
const QuizContext =  createContext()

const initialState = {
    quiz:[],
    quizNumber:0,
    loading:false,
    singleQuiz:{},
    quizEnd:false,
    scores:0,
    selected_answer: null,
}
export const QuizProvider = ({children})=>{
    const navigation = useNavigation()
    const[state, dispatch] = useReducer(reducer, initialState)
    const {quiz, quizNumber,quizEnd,scores,selected_answer} = state
    // console.log("main quiz number" , quizNumber);
    
    const currentQuiz = quiz[quizNumber]
    const options = ([currentQuiz?.ans1,currentQuiz?.ans2,currentQuiz?.ans3, currentQuiz?.correct]).flat()
    // console.log(options);
    const shuffleOptions = randomOptions(options)
    // console.log(shuffleOptions)

    const getAllQuizes = async()=>{
        try {
            dispatch({type:LOADING_SCREEN})
            const quizs = await axios.get("https://security-backend-7l16.onrender.com/api/ques")
            console.log(quizs.data.message)
            dispatch({type:LOAD_QUIZS ,payload:quizs.data.message})
            dispatch({type:STOP_LOADING})
        } catch (error) {
            console.log(error);   
        }
        
    }
    const nextQuiz = ()=>{
        dispatch({type:NEXT_QUIZ, payload:quizNumber + 1})
    }
   
    const trigger_ans = (val)=>{
        console.log(val.toLowerCase().trim(" "))
        dispatch({type:SELECT_ANS, payload:val.toLowerCase().trim(" ")})
    }
    const reset_quiz =()=>{
        dispatch({type:RESET_QUIZ})
    }
    useEffect(()=>{
        getAllQuizes()
    },[])
    return(
        <QuizContext.Provider value={{currentQuiz,shuffleOptions,nextQuiz,quizEnd, quiz,quizNumber, scores,selected_answer,trigger_ans, reset_quiz }} >
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = ()=>{
    return useContext(QuizContext)
}