import {useState, useEffect, useContext} from 'react';
import React from 'react';
import Questions from './Questions';
import {Link, useNavigate} from 'react-router-dom';
import {QuizContext} from './Context';













export default function StartQuiz(props) {

    const navigate = useNavigate();
    const [startQuiz, setStartQuiz] = useState();




    
    function handleClick(event){
        event.preventDefault();
        console.log('Lets start');
       
        
       

        <link to='/quiz'></link>
        

    }




    return (// button starts Quiz Homepage (App)
    <>
    <QuizContext.Provider value={{startQuiz, setStartQuiz}}>

<div className="d-grid gap-2 col-6 mx-auto">
  <button onClick={() => navigate ('/quiz')} className="btn btn-primary" type="button">Start Quiz</button>

  
</div>
</QuizContext.Provider>
   
    </>

    )
}

