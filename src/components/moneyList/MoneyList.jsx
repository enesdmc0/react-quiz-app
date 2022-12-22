import React, {useEffect, useState, useContext} from 'react';
import "./moneyList.scss";
import moneyList from "../../datas/moneyPyramid";
import {GlobalContext} from "../../context/GlobalContext";
const MoneyList = () => {

    const {questionNumber, moneyPyramid, setMoneyPyramid} = useContext(GlobalContext);
    useEffect(() => {
            setMoneyPyramid(moneyList);
    },[])
    return (
        <div className="moneyList">
            <ul>
                {
                    moneyPyramid.map((money) => (
                        <li key={money.id} className={questionNumber === money.id ? "pyramid active" : "pyramid"}>
                            <span className="questionNumber">{money.id}</span>
                            <span className="questionAmount">{money.amount}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MoneyList;
