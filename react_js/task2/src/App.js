import React, {Component} from "react";
import ProductsList from "./components/ProductsList";

class App extends Component {
    render() {
        return (
            <div className='container'>
                <ProductsList title="title1" description="desc1" price={23} stars={4}/>
                <ProductsList description="desc2" stars={2}/>
            </div>
        );
    }
}

export default App;
