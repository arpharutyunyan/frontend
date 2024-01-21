import Countries from "./pages/Countries";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/countries'}/>}/>
                <Route path={'/countries'} element={<Countries/>}/>
                <Route path={'/countries/:country'} element={<Countries/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
