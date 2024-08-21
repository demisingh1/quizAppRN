import { END_QUIZ, LOAD_QUIZS, LOADING_SCREEN, NEXT_QUIZ, RESET_QUIZ, SELECT_ANS, STOP_LOADING } from "./actions"

const QuizReducer =(state, action)=>{
    if(action.type === LOADING_SCREEN){
        return{...state, loading:true}
    }
    if(action.type === LOAD_QUIZS){ 
       return {...state, quiz:action.payload}
    }
    if(action.type === STOP_LOADING){
        return {...state, loading:false}
    }
    if(action.type === NEXT_QUIZ){
        // console.log("next dispatcher", state.quiz.length - 1, action.payload);
        if(state.quiz.length - 1 < action.payload){
           return {...state, quizEnd:true}
        }
        return{...state , quizNumber: action.payload, selected_answer : null}
    }
    if(action.type === END_QUIZ){
        return{...state , quizNumber: 0}
    }
    if(action.type === SELECT_ANS){
        return{...state, selected_answer:action.payload}
    }
    if(action.type === RESET_QUIZ){
        return {...state, quizNumber:0, scores:0, selected_answer:null, quizEnd:false}
    }
}
export default QuizReducer