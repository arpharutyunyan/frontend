import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import ViewPost from "./pages/ViewPost";

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Posts />}></Route>
       <Route path='/post/:post' element={<ViewPost />}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
