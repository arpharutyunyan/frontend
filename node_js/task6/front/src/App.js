import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./pages/Home";
import Election from "./pages/Election";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/election'} element={<Election />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
