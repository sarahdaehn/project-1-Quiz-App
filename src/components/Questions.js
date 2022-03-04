
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

//import{QuizContext} from './Context';
//import {useReducer} from 'react';



// 






export default function Questions(props) {



    
     // get the questions - default empty array 
    //const[question, setQuestion] = useState([]);
    const [question, setQuestion] = useState([]);

    //const [nextQuestion, setNextQuestion] = useState(0);


    const[answers, setAnswers] = useState ([]);

    const [correctAnswer, setCorrectAnswer] = useState([]);

    const [score, setScore] = useState(0);


const navigate = useNavigate();

    //const handleScore = () => setScore (score +1);


    //const[buttonColor, setButtonColor] = useState(false)

    
    //const [colorButton, setColorButton] = useState("red");


    // function handleAnswer(event){
    //     event.preventDefault();


    //     if(answers === true){
    //         console.log("true")  
    // }
    // return false
    // };


//




    useEffect(() => {
        const url = ('https://quizapi.io/api/v1/questions?apiKey=kGlnNNrvOFUBZ6KFBgANGmWyXn3fUlj6NKHHEQaO&difficulty=Medium&limit=10');
        fetch(url)
        .then(res => res.json())
        .then((data) => {
           
            console.log(data);
            console.log(data[0].correct_answers)
            setCorrectAnswer(data[0].correct_answer)
            setQuestion(data[0].question)
            setAnswers(data[0].answers);
        

           


        }) 
        .catch(console.error);
    }, []);


    function handleAnswer(answer) {
        console.log(answer)
        if (
            answer === correctAnswer 
            
        ) {
            const result = score + 1;
            setScore(result);
            //color='green'
            //notworking
            //localStorage.setItem(result)
            console.log(result)
            //result = localStorage
            //answer.target.style.color = 'green'

            console.log(`you are correct! Your Score is ${result}`)     
        } else {
            console.log('You are incorrect')
        }
    };
    

   

    // function refreshPage(){
    //     window.location.reload(false);
       
    // }


    function nextQuestion(){

            const url = ('https://quizapi.io/api/v1/questions?apiKey=kGlnNNrvOFUBZ6KFBgANGmWyXn3fUlj6NKHHEQaO&difficulty=Medium&limit=10');
            fetch(url)
            .then(res => res.json())
            .then((data) => {
               
                console.log(data);
                console.log(data[0].correct_answers)
                setCorrectAnswer(data[0].correct_answer)
                setQuestion(data[0].question)
                setAnswers(data[0].answers);
            
    
               
    
    
            }) 
            .catch(console.error);

    }
        


    return (
      <>
        <section>
          <div className="question-body">
            <h5 className="question-title">Question</h5>
            <p className="question-text">{question}</p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">


            {Object.entries(answers).map(function ([name],index) {
              return (
                <button key={index}
                  onClick={() => handleAnswer(name)}
                  className="btn btn-primary"
                  type="button"
                >
                  {answers[name]}
                </button>
              );
            })}
            </div>
            <div>
          <button  onClick={nextQuestion}id="nextbutton" type="button" className="btn btn-primary btn-sm">NEXT QUESTION</button>
          </div>
          <div>
          
          <button onClick={() => navigate ('/')} id="stopquiz" type="button" className="btn btn-primary btn-sm">STOP QUIZ</button>
          </div>
          
         
        </section>
      </>
    )
};






