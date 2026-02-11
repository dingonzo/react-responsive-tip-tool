// TipInput.js

import React from 'react';

export default function TipInput({
    billAmount,
    setBillAmount,
    tipPercent,
    setTipPercent,
    numberOfPerson,
    setNumberOfPerson,
}) {
    return (
        <div className="section1">
            <div className="row">
                <p>Bill Amount</p>
                <span>₹</span>
                <input
                    type='number'
                    value={billAmount}
                    onChange={(e) => { setBillAmount(e.target.value) }}
                />
            </div>
            <div className="row">
                <p>Select Tip</p>
                <ul>
                    <li onClick={(e) => {
                        setTipPercent('5');
                        document.querySelector(".select").classList.remove("select");
                        e.target.classList.add("select");
                    }}>5%</li>
                    <li onClick={(e) => {
                        setTipPercent('10');
                        document.querySelector(".select").classList.remove("select");
                        e.target.classList.add("select");
                    }}>10%</li>
                    <li className="select" onClick={(e) => {
                        setTipPercent('15');
                        document.querySelector(".select").classList.remove("select");
                        e.target.classList.add("select");
                    }}>15%</li>
                    <li onClick={(e) => {
                        setTipPercent('25');
                        document.querySelector(".select").classList.remove("select");
                        e.target.classList.add("select");
                    }}>25%</li>
                    <li onClick={(e) => {
                        setTipPercent('50');
                        document.querySelector(".select").classList.remove("select");
                        e.target.classList.add("select");
                    }}>50%</li>
                    <input
                        type='number'
                        value={tipPercent}
                        placeholder='Custom...'
                        onChange={(e) => setTipPercent(e.target.value)}
                    />
                </ul>
            </div>
            <div className="row">
                <p>Number of People</p>
                <input
                    type='number'
                    value={numberOfPerson}
                    onChange={(e) => setNumberOfPerson(e.target.value)}
                />
            </div>
        </div>
    );
}
