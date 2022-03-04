
import React, { useEffect } from 'react';
import {useState, UseEffect, useContext} from 'react';
import{QuizContext} from './Context';

// 






export default function Questions(props) {



    
     // get the questions - default empty array 
    const[question, setQuestion] = useState([]);

    const[answers, setAnswers] = useState ([]);


//




    useEffect(() => {
        const url = ('https://quizapi.io/api/v1/questions?apiKey=kGlnNNrvOFUBZ6KFBgANGmWyXn3fUlj6NKHHEQaO&difficulty=Medium&limit=10');
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            //setQuestion(res)
            //console.log(data);
            // data check for question
            //console.log(data[0].question);
            // correct answer
            console.log("========>>>>>>>>")
            console.log(data);
            // console.log(data[0].correct_answers);
            console.log(data[0].answers.answer_a)
            // console.log(data[0].question);
            // console.log(data[0].correct_answer)
            setQuestion(data[0].question)
            setAnswers(data[0].answers);
            
            

            //setQuestion(data.correct_answers);

           


        }) 
        .catch(console.error);
    }, []);



    return (

        <>
        <section>
            
            
            <div className="question-body">
                <h5 className="question-title">Question 1</h5>
                <p className="question-text">{question}</p>
              </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                { Object.entries(answers).map(function([name, something], index){
                    return <button className="btn btn-primary" type="button">{answers[name]}</button>;
                  })}


                

              {/* <button className="btn btn-primary" type="button">{question.correct_answer}Answer2 </button>
              <button className="btn btn-primary" type="button">{question.answers}Answer 3</button> */}
            </div>
           
        </section>

        </>
        
        
    )// ask Questions with 3 buttons for multiply choice answers.
};

//ToDo 
// don't show null answers 
