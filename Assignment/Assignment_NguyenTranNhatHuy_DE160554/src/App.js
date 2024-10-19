import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';

function App() {

  return (
    <div>
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
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/home' element={<TaskList />}></Route>
            <Route path='/create' element={<CreateTask />}></Route>
            <Route path='/update/:id' element={<UpdateTask />}></Route>

          </Routes>
        </Provider>
      </BrowserRouter>

    </div >
  );
}

export default App;
