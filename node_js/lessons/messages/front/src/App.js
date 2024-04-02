import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Messages/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer hideProgressBar />
    </>
  );
}

export default App;
