import {BrowserRouter, Route, Routes} from "react-router-dom";
import Buttons from "./pages/Buttons";
import Blocks from "./pages/Blocks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Buttons />} />
        <Route path={'/Blocks'} element={<Blocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
