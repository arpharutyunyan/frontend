import React, {Component} from "react";
import ProductsList from "./components/ProductsList";
import image1 from './assets/images/image1.jpeg';
import image2 from './assets/images/image2.jpeg';
// import image3 from './assets/images/image3.jpeg';
import image4 from './assets/images/image4.jpeg';

const productsListData = [
    {
        "img": image1,
        "title": "title1",
        "description": "desc1",
        "price": 150,
    },
    {
        "img": image2,
        "title": "title2",
        "description": "desc2",
        "price": 170,
    },
    {
        "img": './images/image3.jpeg',
        "title": "title3",
        "description": "desc3",
        "price": 150,
    },
    {
        "img": image4,
        "title": "title4",
        "description": "desc4",
        "price": 200,
    }
];



class App extends Component {
    render() {
        return (
            <div className='container'>
                {productsListData.map((product)=>(
                    <ProductsList
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        );
    }
}

export default App;
