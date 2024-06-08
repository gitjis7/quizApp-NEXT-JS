// QuestionSet.js
'use client'
export const quiz = {
	questions: [
		{
			id: 1,
			question: 'What does API stand for?',
			answers: ['Application Programming Interface',
				'Advanced Programming Interface',
				'Application Program Interface',
				'Automated Programming Interface'],
			correctAnswer: 'Application Programming Interface',
		},

		{
			id: 2,
			question: `Which programming language is often 
			used for building web servers?`,
			answers: ['Java', 'Python', 'JavaScript', 'C#'],
			correctAnswer: 'JavaScript',
		},
		{
			id: 3,
			question: 'What is the purpose of SQL?',
			answers: ['Styling web pages', 'Querying databases',
				'Creating animations', 'Developing mobile apps'],
			correctAnswer: 'Querying databases',
		},
		{
			id: 4,
			question: 'What does MVC stand for in web development?',
			answers: ['Model View Controller', 'Model Visual Controller',
				'Model View Component', 'Model Visual Component'],
			correctAnswer: 'Model View Controller',
		},
		{
			id: 5,
			question: 'What does HTML stand for?',
			answers: ['Hyper Tag Markup Language', 'Hyper Text Markup Language',
				'Hyperlinks Text Mark Language', 'Hyperlinking Text Marking Language'],
			correctAnswer: 'Hyper Text Markup Language',
		},
		{
			id: 6,
			question: 'What symbol indicates a tag?',
			answers: ['Header', 'Bold',
				'Body', 'Image'],
			correctAnswer: 'Body',
		},
		{
			id: 7,
			question: 'Which of these is a genuine tag keyword?',
			answers: ['Angle brackets e.g.<>', 'Curved brackets e.g. {,}',
				'Commas e.g.,', 'Exclamation marks e.g. !'],
			correctAnswer: 'Angle brackets e.g.<>',
		},
		{
			id: 8,
			question: 'A CSS file can be applied to only one HTML file.',
			answers: ['True', 'False'],
			correctAnswer: 'False',
		},
	
	],
};
// export const quizReducer = (state, action) => {
	
// 	console.log('quiz reducer working fine');
// 	console.log('statePrint',state)
// 	console.log('actionPayload potta',action.payload)
// 	console.log('actionTYpe da',action.type)
// 	switch (action.type) {
// 	  case 'ADD_QUESTION':
		
// 		return {
// 		  ...state,
// 		  questions: [...state.questions, action.payload],
// 		};
// 	  default:
// 		return state;
// 	}
//   };


export const quizReducer = (state, action) => {
	console.log('quiz reducer working fine');
	console.log('statePrint', state);
	console.log('actionPayload potta', action.payload);
	console.log('actionType da', action.type);
  
	switch (action.type) {
	  case 'ADD_QUESTION':
	
		const questionExists = state.questions.some(q =>
		  q.question.trim().toLowerCase() === action.payload.question.trim().toLowerCase()
		);
  
		if (!questionExists) {
		  return {
			...state,
			questions: [...state.questions, action.payload],
		  };
		}

		return state;
  
	  default:
		return state;
	}
  };
  
  
  

