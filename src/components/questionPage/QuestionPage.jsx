import React, {useEffect, useState, useContext} from 'react';
import "./questionPage.scss";
import questions from "../../datas/questions";
import {GlobalContext} from "../../context/GlobalContext";
import Timer from "../timer/Timer";
import Start from "../start/Start";
import useSound from "use-sound";
import play from "../../assets/src_sounds_play.mp3";
import correct from "../../assets/src_sounds_correct.mp3";
import wrong from "../../assets/src_sounds_wrong.mp3";
const QuestionPage = () => {
    const [question, setQuestion] = useState(questions[1]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer")
    const {questionNumber, setQuestionNumber, timeOut , setTimeOut, moneyPyramid, start, name} = useContext(GlobalContext);
    const [ letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [earned , setEarned] = useState("$ 0")

    useEffect(() => {
        letsPlay();
    },[letsPlay]);

    useEffect(() => {
        questionNumber > 1 &&
        setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
    }, [questionNumber, moneyPyramid]);

    useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active")
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" : "answer wrong")
        },3000)

        setTimeout(() => {
          if (a.correct) {
              correctAnswer();
                setQuestionNumber(questionNumber + 1);
                setSelectedAnswer(null);
          }else {
              wrongAnswer();
              setTimeout(() => {
                    setTimeOut(true);
              }, 1000)
          }
        },4000)
    }
    return (
        <div className="questionPage">
            {
                !start ? <Start/>
                    : (<>
                        {
                            timeOut ? <h1 className="earned"><span className="earned"> {name}</span><br/>Your earned : {earned}</h1>
                                : (<>
                                    <div className="timer">
                                        <span className="timeText"><Timer/></span>
                                    </div>
                                    <div className="questionAnswer">
                                        <div className="question">{question?.question}</div>
                                        <ul className="answers">
                                            {question?.answers.map((a,index) => (
                                                <li key={index} onClick={() => handleClick(a)}  className={selectedAnswer === a ? className : "answer"}>{a.text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </>)
                        }
                    </>)
            }
        </div>
    );
};

export default QuestionPage;
