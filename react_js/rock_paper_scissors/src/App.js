import React, {useCallback, useEffect, useState} from "react";
import HandType from "./components/HandType";
import Result from "./components/Result";
import ChosenHandType from "./components/ChosenHandType";

const types = ['rock', 'paper', 'scissors'];
const winnerTypes = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
};

function App() {
    const [computerScore, setComputerScore] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerChoice, setComputerChoice] = useState('');
    const [playerChoice, setPlayerChoice] = useState('');
    const [result, setResult] = useState('');
    const [isComputerChoiceShown, setIsComputerChoiceShown] = useState(false);

    const finishGame = () => {
        setIsComputerChoiceShown(!isComputerChoiceShown);
        setComputerScore(0);
        setPlayerScore(0);
        setPlayerChoice('');
        setComputerChoice('');
        setResult('');
    };

    const handTypeChangeHandle = useCallback((type) => {
        setPlayerChoice(type);
        const randomType = types[Math.floor(Math.random() * 3)];
        setComputerChoice(randomType);
        setIsComputerChoiceShown(true);
    }, []);

    useEffect(() => {
        if (playerChoice && computerChoice) {
            setWinner();
        }
    }, [playerChoice, computerChoice]);

    const setWinner = () => {
        if (playerChoice === computerChoice) {
            setResult('Drew');
        } else if (playerChoice === winnerTypes[computerChoice]) {
            setPlayerScore(playerScore + 1);
            setResult('you win!!!');
        } else {
            setComputerScore(computerScore + 1);
            setResult('you lose (((');
        }
    };

    return (
        <div className="app">
            <div className="handTypes">
                {types.map(element => (
                    <HandType type={element} key={element} onSelect={handTypeChangeHandle}/>
                ))}
            </div>
            {
                isComputerChoiceShown ?
                    <ChosenHandType computerChoice={computerChoice} playerChoice={playerChoice} result={result}
                                    onClose={finishGame}/>
                    : null
            }
            <Result computerScore={computerScore} playerScore={playerScore}/>
        </div>
    );
}

export default App;
