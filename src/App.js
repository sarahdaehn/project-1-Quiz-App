
import "./App.css";
import StartQuiz from "./components/StartQuiz";
import Results from "./components/Results";
import Questions from "./components/Questions";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
import QuizInformation from "./components/QuizInformation";
import { Modal } from "react-bootstrap";
import Popup from "./components/Popup";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

function App() {
  return (
    <>
      <div>
        <nav className="nav">
          <img className="Logo" src="images/science-logo.jpg" alt="" />

          <Link id="quizinformation" to="/quizInformation">
            <br />
            <br />
            <p>Quiz Information</p>
          </Link>
          <Link to="/">
            <p>Home</p>
          </Link>
        </nav>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<StartQuiz />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/quizInformation" element={<QuizInformation />} />
          {/* <Route path="/results" element={<Results />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
