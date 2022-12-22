import React,{useState, createContext} from 'react';

//create context

export const GlobalContext = createContext();


//global provider
export const GlobalProvider = ({children}) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [timer , setTimer] = useState(30);
    const [moneyPyramid, setMoneyPyramid] = useState([]);
    const [start , setStart] = useState(false);
    const [name , setName] = useState("");
    const values = {
        questionNumber,
        setQuestionNumber,
        timeOut,
        setTimeOut,
        timer,
        setTimer,
        moneyPyramid,
        setMoneyPyramid,
        start,
        setStart,
        name,
        setName
    }
    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}