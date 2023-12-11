import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:postId' element={<p>Post Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
