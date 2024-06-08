// useQuizReducer.js
import { useReducer } from 'react';
import {quizReducer} from './Questions'
import { quiz } from './Questions';


const useQuizReducer = () => {
  const [state, dispatch] = useReducer(quizReducer, quiz);
  const addQuestion = (question, answers, correctAnswer) => {
  
    const newQuestion = {
      id: state.questions.length + 1,
      question,
      answers,
      correctAnswer
    };
    dispatch({ type: 'ADD_QUESTION', payload: newQuestion });
  };

  return { state, addQuestion };
};

export default useQuizReducer;
