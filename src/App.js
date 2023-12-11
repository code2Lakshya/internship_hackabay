import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from "./pages/HomePage/HomePage";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const PostPage=lazy(()=>import('./pages/PostPage/PostPage'));

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:postId' element={<Suspense fallback={<Loader />}><PostPage /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
