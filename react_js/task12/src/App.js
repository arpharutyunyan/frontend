import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ShowMovie from "./pages/ShowMovie";
import './assets/css/style.scss';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/:id'} element={<ShowMovie/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
