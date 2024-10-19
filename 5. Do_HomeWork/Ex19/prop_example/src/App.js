import React from 'react';
import './App.css';
import animalsData from './components/animalsData';
import AnimalCard from './components/AnimalCard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { renderRoutes } from './router/routes';
import { routes } from './router/routes';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import CustomNavbar, { About, Contact, Home, Profile } from './components/CustomNavbar';
function App() {
  return (
    // ex-19
    // <div className="container mt-5">
    //   <div className="row">
    //     {animalsData.map((animal, index) => (
    //       <div key={index} className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mb-4">
    //         <AnimalCard {...animal} />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //ex20
    // <>
    //   <BrowserRouter>
    //     <div>
    //       <Routes>
    //         {routes.map((route, index) => (
    //           <Route
    //             key={index}
    //             path={route.path}
    //             element={<route.component />}
    //             exact={route.exact}
    //           />
    //         ))}
    //       </Routes>
    //     </div>
    //   </BrowserRouter>

    // </>

    //ex21_a
    // <>
    //   <BrowserRouter>
    //     <div>
    //       <Routes>
    //         <Route path="/" exact element={<UserList />} />
    //         <Route path="/users/:id" element={<UserDetail />} />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </>

    //ex22_b

    <>

      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
