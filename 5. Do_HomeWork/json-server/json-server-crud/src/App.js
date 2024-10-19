import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<PostList />}></Route>
          <Route exact path='/post' element={<PostList />}></Route>
          {/* <Route path='/create' element={<CreatePost />}></Route> */}

        </Routes>
      </BrowserRouter>
      {/* <PostList /> */}
    </div>
  );
}

export default App;
