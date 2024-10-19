import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './components/redux/Store';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Provider store={store}>
          <Routes>
            <Route element={<Home />} path='/home'></Route>
            <Route element={<Video />} path='/video'></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
