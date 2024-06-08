'use client'

import React from 'react'
import { useState } from 'react'
import Quiz from './Components/Quiz';

export default function Home() {

    const[quizStarted,setQuizStarted] = useState(false);
    const [name,setName] = useState('')
  return (
    <div className="container mt-5 ml-5">
    <div className="text-center">

        <h1 className='text-warning mtb-1 bg-dark '>
            Jis.Devs
        </h1>
        <h3 className='mb-4'>Quiz App</h3>
    </div>

    {quizStarted ? (
        <Quiz name={name} />
    ) : (
        <>
            <div className="mb-3">
                <label htmlFor="nameInput"
                    className="form-label">
                    Enter Your Name:
                </label>
                <input required
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)}
                />
            </div>
            <button
                onClick={() => setQuizStarted(true)}
                className="btn btn-primary"
    
                disabled={!name.trim()}
            >
                Start Quiz
            </button>
        </>
    )}
</div>
  )
}
