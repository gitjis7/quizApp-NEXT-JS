'use client'
import { useState ,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { quiz } from '../Data/Questions';
import { redirect } from 'next/navigation';
import { useReducer } from 'react';
import useQuizReducer from '../Data/useQuizReducer'
import { quizReducer } from '../Data/Questions';

export default function AddQuestion() {
  
  const [state, dispatch] = useReducer(quizReducer, quiz);
  const [questionData, setQuestionData] = useState({
    id: 1,
    question: '',
    answers: ['', '', '', ''],
    correctAnswer: '',
  });

  const {questionsData} = state;
const [questions, setQuestions] = useState(questionsData);



  const handleQuestionChange = (e) => {
    setQuestionData({
      ...questionData,
      question: e.target.value,
    });
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...questionData.answers];
    newAnswers[index] = value;
    setQuestionData({
      ...questionData,
      answers: newAnswers,
    });
  };

  const handleCorrectAnswerChange = (e) => {
    setQuestionData({
      ...questionData,
      correctAnswer: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      questionData.question &&
      questionData.answers.every((answer) => answer) &&
      questionData.correctAnswer
    ) {
      const newQuestion = { ...questionData, id: quiz.questions.length + 1 };
      dispatch({ type: 'ADD_QUESTION', payload: newQuestion });
      const getStorageQuestions = localStorage.getItem('questions');
    let parseQuestions = getStorageQuestions ? JSON.parse(getStorageQuestions) : [];

    parseQuestions.unshift(newQuestion);

    localStorage.setItem('questions', JSON.stringify(parseQuestions));
      setQuestionData({
        id: quiz.questions.length + 1,
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: '',
      });
   
           alert('Question added successfully');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className='card p-4'>
      <h1>Add Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput"
                    className="form-label">Question:</label>
          <input 
           className="form-control"
            type="text"
            value={questionData.question}
            onChange={handleQuestionChange}
          />
        </div>
        <div>
          <label>Answers:</label>
          {questionData.answers.map((answer, index) => (
            <div key={index}>
              <input
               className="form-control"
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div>
          <label>Correct Answer:</label>
          <select
            className="form-select"
            value={questionData.correctAnswer}
            onChange={handleCorrectAnswerChange}
          >
            <option value="" disabled>
              Select correct answer
            </option>
            {questionData.answers.map((answer, index) => (
              <option key={index} value={answer}>
                {answer}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Question</button>
      </form>
      <h2>Current Question</h2>
      {questionData.question && (
        <div>
          <p>
            <strong>Q:</strong> {questionData.question}
          </p>
          <ul>
            {questionData.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <p>
            <strong>Correct Answer:</strong> {questionData.correctAnswer}
          </p>
        </div>
      )}
    </div>
  );


}
