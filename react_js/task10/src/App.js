import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ShowMenu from "./pages/ShowMenu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={`/showMenu/all`}/>}></Route>
                <Route path='/showMenu/:category' element={<ShowMenu/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
