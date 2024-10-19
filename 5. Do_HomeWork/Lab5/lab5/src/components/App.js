import logo from './logo.svg';
import './App.css';
import QuizApp from './components/QuizApp';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className='text-center mt-4'>Quiz App</h1>
      <QuizApp />
    </div>
  );
}

export default App;
