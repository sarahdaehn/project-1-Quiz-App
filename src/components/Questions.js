
import React, { useEffect } from 'react';
import {useState} from 'react';
//import{QuizContext} from './Context';
import {useReducer} from 'react';



// 






export default function Questions(props) {



    
     // get the questions - default empty array 
    //const[question, setQuestion] = useState([]);
    const [question, setQuestion] = useState([]);


    const[answers, setAnswers] = useState ([]);

    const [correctAnswer, setCorrectAnswer] = useState([]);

    //const [score, setScore] = useState(0);


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
            //setQuestion(res)
            //console.log(data);
            // data check for question
            //console.log(data[0].question);
            // correct answer
           
            console.log(data);
            // console.log(data[0].correct_answers);
            //console.log(data[0].answers.answer_a)
            // console.log(data[0].question);
            // console.log(data[0].correct_answer)
            console.log(data[0].correct_answers)
            setCorrectAnswer(data[0].correct_answer)
            setQuestion(data[0].question)
            setAnswers(data[0].answers);

            




            //setQuestion(data.correct_answers);

           


        }) 
        .catch(console.error);
    }, []);


    // function correct() {
    //     if ((answers) === true) {
    //         alert('correct');
    //     }
        
    // };

    function handleAnswer(answer) {
        console.log(answer)
        if (
            answer === correctAnswer 
        ) {
            console.log('you are correct')
        } else {
            console.log('You are incorrect')
        }

            // shows the value of the Object - true / false 
            //if(answers.key.value)
            // map through the value 
           

            //console.log(answers.key.value)





            // Logic 
            // if value = true save score 
            // if value = false return 
        //)
    };

    // function ScoreCounter (state, action) {
    //     if (action === 'True') {
    //         return state + 1
    //     } return state 
    // }
// const [score, dispatch] = useReducer((state, action) => {ScoreCounter}, 0);

//     function ScoreCounter (state, action) {
//         switch(action.type) {
//             case 'INCREMENT': return (state += action.value); 
//             default: return state ;
//         }
//     }


    return (

        <>
        <section>
            
            
            <div className="question-body">
                <h5 className="question-title">Question</h5>
                <p className="question-text">{question}</p>
              </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                
                {/* {Object.entries(answers).map(function([key, value]){
                    return <button onClick={() => dispatch({type:'INCREMENT', value: 1})}className="btn btn-primary" type="button">{answers[key]}</button>;
                  })} */}

{Object.entries(answers).map(function([name]){
    
        return <button onClick={() => handleAnswer(name)} className="btn btn-primary" type="button">{answers[name]}</button>;


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

// Object = Keys Value 


//style= {answers === true && {backgroundColor:'red'} }



// Working Version 

// {/* <section>
            
            
// <div className="question-body">
//     <h5 className="question-title">Question</h5>
//     <p className="question-text">{question}</p>
//   </div>
// <div className="d-grid gap-2 col-6 mx-auto">
    
//     {Object.entries(answers).map(function([name]){
//         return <button onClick={handleAnswer} className="btn btn-primary" type="button">{answers[name]}</button>;
//       })}




    

//   {/* <button className="btn btn-primary" type="button">{question.correct_answer}Answer2 </button>
//   <button className="btn btn-primary" type="button">{question.answers}Answer 3</button> */}
// </div>

// </section> */}