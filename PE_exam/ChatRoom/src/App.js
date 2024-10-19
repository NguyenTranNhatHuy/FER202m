import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import Footer from './components/Footer';
import ChatRoom from './components/ChatRoom';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Carousel />
        <Provider store={store}>
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Home />} path='/home'></Route>
            <Route element={<ChatRoom />} path='/chat'></Route>
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
