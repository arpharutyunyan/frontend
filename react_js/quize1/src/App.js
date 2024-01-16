import './assets/css/style.css';
import AmountInput from "./components/AmountInput";
import React, {useCallback, useState} from "react";
import Convertor from "./components/Convertor";
import Button from "./components/Button";
import Api from "./Api";
import {ReactComponent as Arrow} from "./assets/images/arrow.svg";
import CountryCode from "./CountryCode";

function App() {
    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [fromFlag, setFromFlag] = useState('');
    const [to, setTo] = useState(null);
    const [toFlag, setToFlag] = useState(null);
    const [currencyResult, setCurrencyResult] = useState(0);

    const handleAmountValue = useCallback((value) => {
        setAmount(value);
    }, []);

    const handleFromChange = useCallback((selectedOption) => {
        setFrom(selectedOption.value);
        const countryCode = CountryCode.getCountryCode((selectedOption.value).toUpperCase());
        setFromFlag(countryCode);
    }, []);

    const handleToChange = useCallback(async (selectedOption) => {
        setTo(selectedOption.value);
        const countryCode = CountryCode.getCountryCode((selectedOption.value).toUpperCase());
        setToFlag(countryCode);
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
                    {
                        fromFlag ? <img src={`/images/flags/${fromFlag}.svg`} alt=""/> : null
                    }
                    <Convertor onHandleChange={handleFromChange}/>
                </div>
                <Arrow/>
                <div className="to">
                    <label>To</label>
                    {
                        toFlag ? <img src={`/images/flags/${toFlag}.svg`} alt=""/> : null
                    }
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
