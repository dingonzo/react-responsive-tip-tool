// TipResult.js

import React, { useEffect, useState } from 'react';

export default function TipResult({ billAmount, tipPercent, numberOfPerson, handleReset }) {
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState('0.00');
    const [totalPerPerson, setTotalPerPerson] = useState('0.00');

    useEffect(() => {
        if (billAmount !== '' && tipPercent !== '' && numberOfPerson !== '') {
            const value1 = (tipPercent * billAmount) / (100 * numberOfPerson);
            setTipAmountPerPerson(value1.toFixed(2));

            const value2 = value1 + (billAmount / numberOfPerson);
            setTotalPerPerson(value2.toFixed(2));
        } else {
            setTipAmountPerPerson('0.00');
            setTotalPerPerson('0.00');
        }
    }, [billAmount, tipPercent, numberOfPerson]);

    return (
        <div className="section2">
            <div className="row">
                <div>
                    <p>Tip Amount</p>
                    <p>/ person</p>
                </div>
                <div>
                    {tipAmountPerPerson}&nbsp;₹
                </div>
            </div>
            <div className="row">
                <div>
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <div>
                    {totalPerPerson}&nbsp;₹
                </div>
            </div>
            <button className='reset' onClick={handleReset}>RESET</button>
        </div>
    );
}
