import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Filters from "./pages/Filters";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/filters'}/>}/>
                <Route path={'filters'} element={<Filters/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
