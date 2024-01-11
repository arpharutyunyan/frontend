import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {
    return (

        <div className="wrapper">
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Services/>
                <Contact/>
                <Feedback/>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
