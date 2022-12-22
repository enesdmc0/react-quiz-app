import {useContext, useEffect} from 'react';
import {GlobalContext} from "../../context/GlobalContext";

const Timer = () => {
    const { setTimeOut, questionNumber, timer , setTimer} =useContext(GlobalContext);


    useEffect(() => {
        if (timer === 0 ) return setTimeOut(true);
        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        },1000)
        return () => clearInterval(interval)
    }, [timer, setTimeOut])

    useEffect(() => {
        setTimer(30);
    }, [questionNumber])
    return timer
};

export default Timer;
