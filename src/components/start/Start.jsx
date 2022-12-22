import React, {useContext, useRef}from 'react';
import {GlobalContext} from "../../context/GlobalContext";
import "./start.scss";
const Start = () => {
    const {start, setStart, name, setName} = useContext(GlobalContext);
    const myRef = useRef();
    const handleClick = () => {
        setStart(!start)
        myRef.current.value && setName(myRef.current.value)
    }
    return (
        <div className="start">
            <input
            type="text"
            placeholder="Enter your name ..."
            onChange={(e) => setName(e.target.value)}
            ref={myRef}
            />
            <button onClick={handleClick}>Start</button>
        </div>
    );
};

export default Start;
