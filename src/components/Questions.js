
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
//import { Popup } from 'reactjs-popup';
// import { Alert } from 'bootstrap';
// import Alert from 'reactjs-popup-alert'
// import Popup from './Popup';

// import { withAlert } from 'react-alert'


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

//     const [isOpen, setIsOpen ] = useState(false);

// const togglePopup = () => {
//   setIsOpen(!isOpen);
// }






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
        if (
            answer === correctAnswer 
            
        ) {
            const result = score + 1;
            setScore(result);
            nextQuestion()
          
            console.log(`CORRECT! SCORE ${result}`) 
            handleShow() 

            // alert.score isn't working 
            // alert(`CORRECT! SCORE ${result}`)


        } else {
            console.log('You are incorrect')
            handleWrong()
            
            

            // alert('You are incorrect')
        }
    };

//  function popup() {
//      <Popup trigger={<button>Trigger</button>} position="right center">
//          <div>HELLO</div>
//      </Popup>
//  };


// function Popup (props){
//   return (
//     <div className="popup-box">
//     <div className="box">
//       <span className="close-icon" onClick={props.handleClose}>x</span>
//       {props.content}
//     </div>
//   </div>
// );
// };



 
    

   

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
  
    // const [isCorrect, setCorrect] = useState(false);    

    // const toggleClass = () => {
    //     console.log("=======>>>>>>")
    //     setCorrect(!isCorrect);
    //   };
    
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
                //   onClick={() => handleAnswer(this, name, index)}
                  //
                //   onClick={toggleClass}
                onClick={() => handleAnswer(name)}
                
                className="btn btn-primary"
                //{answer === correctAnswer ? 'green' : 'red'}
                 // style={correctAnswer ? {backgroundColor:'green'} : !correctAnswer ? {backgroundColor: 'red'}
                //   className="btn btn-primary"
                  type="button"
                  // <Popup trigger={true}></Popup>
                //   id={"answer-" + index}
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
          
          <button onClick={() => navigate ('/')} id="stopquiz" type="button"   className="btn btn-primary btn-sm">STOP QUIZ</button>
          </div>

          {/* style="float: right;" */}

          {/* <div>
          <button  id="score" type="button"  className="btn btn-primary btn-sm">SCORE</button>
          </div> */}

         

         {/* //write answer  */}
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


{/* // wrong Answer */}
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






