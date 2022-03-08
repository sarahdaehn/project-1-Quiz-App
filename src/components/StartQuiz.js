import {useState, useEffect, useContext} from 'react';
import React from 'react';
import Questions from './Questions';
import {Link, useNavigate} from 'react-router-dom';
import {QuizContext} from './Context';
import "./StartQuiz.css"













export default function StartQuiz(props) {

    const navigate = useNavigate();
    const [startQuiz, setStartQuiz] = useState();




    
    function handleClick(event){
        event.preventDefault();
        <link to='/quiz'></link>
        
    }




    return (
    <>
    <QuizContext.Provider value={{startQuiz, setStartQuiz}}>

<div className="d-grid gap-2 col-6 mx-auto">
  <button id="start" onClick={() => navigate ('/quiz')} className="btn btn-primary" type="button">Start Quiz</button>

  
</div>
</QuizContext.Provider>
   
    </>

    )
}

