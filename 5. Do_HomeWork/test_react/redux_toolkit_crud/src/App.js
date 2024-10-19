import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import CompanyList from './components/CompanyList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCompany from './components/CreateCompany';
import UpdateCompany from './components/UpdateCompany';
import { ToastContainer } from 'react-toastify';

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
            <Route path='/home' element={<CompanyList />}></Route>
            <Route path='/create' element={<CreateCompany />}></Route>
            <Route path='/update/:id' element={<UpdateCompany />}></Route>

          </Routes>
        </Provider>
      </BrowserRouter>

    </div >
  );
}

export default App;
