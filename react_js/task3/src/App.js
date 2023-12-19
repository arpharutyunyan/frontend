import React, {Component} from "react";
import './asstets/css/style.css';
import ToursList from "./components/ToursList";

const data = [
    {
        'img': './images/image1.jpeg',
        'title': 'What is Lorem Ipsum',
        'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ' +
            'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type... ',
        'price': 1995,
    },
    {
        'img': './images/image2.jpeg',
        'title': 'Why do we use it',
        'desc': 'It is a long established fact that a reader will be distracted by the readable content of a page ' +
            'when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal... ',
        'price': 2005,
    },
    {
        'img': './images/image3.jpeg',
        'title': 'Where does it come from',
        'desc': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor... ',
        'price': 1560,
    },
    {
        'img': './images/image4.jpeg',
        'title': 'Where can I get some',
        'desc': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered ' +
            'alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable... ',
        'price': 2650,
    }
];

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className="title">
                    <h1>Our Tours</h1>
                    <div className="divider"></div>
                </div>

                {
                    data.map((tour) => (
                        <ToursList tourData={tour}/>
                    ))
                }
            </div>
        );
    }
}

export default App;
