
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'



import "./Questions.css";
 

export default function Questions(props) {

    const [question, setQuestion] = useState([]);

    const[answers, setAnswers] = useState ([]);

    const [correctAnswer, setCorrectAnswer] = useState([]);

    const [score, setScore] = useState(0);

const [show, setShow] = useState(false);
const [wrong, setWrong] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleWrong = () => setWrong(true);
    const handleWrongClose = () => setWrong(false)
    
    

    const navigate = useNavigate();

    useEffect(() => {
        const url = ('https://quizapi.io/api/v1/questions?apiKey=kGlnNNrvOFUBZ6KFBgANGmWyXn3fUlj6NKHHEQaO&difficulty=Medium&limit=10');
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          
            setCorrectAnswer(data[0].correct_answer)
            setQuestion(data[0].question)
            setAnswers(data[0].answers);
        

           


        }) 
        .catch(console.error);
    }, []);


    function handleAnswer(answer) {
        if (
            answer === correctAnswer 
            
        ) {
            const result = score + 1;
            setScore(result);
            nextQuestion()
          
            // console.log(`CORRECT! SCORE ${result}`) 
            handleShow() 

            
            // alert(`CORRECT! SCORE ${result}`)


        } else {
            
            handleWrong()
        }
    };


    function nextQuestion(){

            const url = ('https://quizapi.io/api/v1/questions?apiKey=kGlnNNrvOFUBZ6KFBgANGmWyXn3fUlj6NKHHEQaO&difficulty=Medium&limit=10');
            fetch(url)
            .then(res => res.json())
            .then((data) => {
               
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
            <h5 align="center" className="question-title">Question</h5>
            <p align="center" className="question-text">{question}</p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">


            {Object.entries(answers).map(function ([name],index) {
              
              if (answers[name] != null) {

              return (
                <button key={index}
                
                onClick={() => handleAnswer(name)}
                id="answerbutton"
                className="btn btn-primary"
              
                  type="button"
                
                 >
                  {answers[name]}
                </button>
              )};
            
            })}
            
            </div>

            <br/>
            <div>
          <button  onClick={nextQuestion} id="nextbutton" type="button" className="btn btn-primary btn-sm">NEXT QUESTION</button>
          </div>
          <div>
          <button align="center" onClick={() => navigate ('/')} id="stopquiz" type="button"   className="btn btn-primary btn-sm">STOP QUIZ</button>
          </div>

         
<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>CORRECT</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're correct!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              NEXT QUESTION
            </Button>
           
          </Modal.Footer>
        </Modal>



        <Modal show={wrong} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>INCORRECT</Modal.Title>
          </Modal.Header>
          <Modal.Body>OH NO, you're incorrect!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleWrongClose}>
              CLOSE
            </Button>
           
          </Modal.Footer>
        </Modal>
      
         



        </section>
      </>


    )
};






