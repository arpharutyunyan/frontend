import './assets/css/style.css';
import AmountInput from "./components/AmountInput";
import React, {useCallback, useState} from "react";
import Convertor from "./components/Convertor";
import Button from "./components/Button";
import Api from "./Api";
import {ReactComponent as Arrow} from "./assets/images/arrow.svg";

function App() {
    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [currencyResult, setCurrencyResult] = useState(0);

    const handleAmountValue = useCallback((value) => {
        setAmount(value);
    }, []);

    const handleFromChange = useCallback((selectedOption) => {
        setFrom(selectedOption.value);
    }, []);

    const handleToChange = useCallback((selectedOption) => {
        setTo(selectedOption.value);
    }, []);

    const getResult = useCallback((e) => {
        e.preventDefault();
        console.log('getResult');

        if (amount && from && to) {
            (async () => {
                try {
                    let currencyData = await Api.getCurrency(from, to);
                    currencyData = currencyData.data;
                    setCurrencyResult((amount * currencyData[to]).toFixed(2));
                } catch (e) {
                    console.error(e);
                }
            })()
        }
    }, [amount, from, to]);

    return (
        <div className="container">
            <h1>Currency Converter</h1>
            <AmountInput onHandleInputValue={handleAmountValue} value={amount}/>
            <div className="convertor">
                <div className="from">
                    <label>From</label>
                    <Convertor onHandleChange={handleFromChange}/>
                </div>
                <Arrow/>
                <div className="to">
                    <label>To</label>
                    <Convertor onHandleChange={handleToChange}/>
                </div>
            </div>
            {
                currencyResult ?
                    <div>
                        {`${amount} ${from.toUpperCase()} = ${currencyResult} ${to.toUpperCase()}`}
                    </div>
                    : null
            }
            <Button onClick={getResult}/>
        </div>
    );
}

export default App;
