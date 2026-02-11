// TipCalculator.js

import React, { useState } from 'react';
import './TipCalculator.css';
import TipInput from './TipInput';
import TipResult from './TipResult';

export default function TipCalculator() {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercent, setTipPercent] = useState('15');
    const [numberOfPerson, setNumberOfPerson] = useState('1');

    const handleReset = () => {
        setBillAmount('');
        setTipPercent('15');
        setNumberOfPerson('1');
    }

    return (
        <div className="container">
            <TipInput
                billAmount={billAmount}
                setBillAmount={setBillAmount}
                tipPercent={tipPercent}
                setTipPercent={setTipPercent}
                numberOfPerson={numberOfPerson}
                setNumberOfPerson={setNumberOfPerson}
            />
            <TipResult
                billAmount={billAmount}
                tipPercent={tipPercent}
                numberOfPerson={numberOfPerson}
                handleReset={handleReset}
            />
        </div>
    );
}