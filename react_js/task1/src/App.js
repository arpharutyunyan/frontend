import React, {Component} from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import FormBtn from "./components/FormBtn";
import BestShootersList from "./components/BestShootersList";

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Title/>
                <h3>My form</h3>
                <form>
                    <Input/>
                    <Input/>
                </form>
                <FormBtn/>
                <BestShootersList/>
            </div>
        );
    }
}

export default App;
