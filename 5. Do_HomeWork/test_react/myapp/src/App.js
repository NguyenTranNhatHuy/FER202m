import React, { createContext } from 'react';
import ClockComponent from './components/ClockComponent';
import Demo from './components/Demo';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import CompanyList from './components/redux/CompanyList';

function App() {

  const myInfo = {
    name: "Nhathuy",
    age: "22 tuoi"
  }
  return (
    <div>
      {/* <ClockComponent />
      <Demo title={'Nhat Huy'} /> */}
      {/* <UseState />
      <UseEffect />
      <UseContext myInfo={myInfo} />
      <UseReducer /> */}

      {/* Exercise_16 */}
      {/* <EventHandlingDemo /> */}

      {/* Exercise_17 */}
      {/* <React.StrictMode>
        <RenderAndCommitDemo />
      </React.StrictMode> */}

      {/* Exercise_18 */}
      {/* <React.StrictMode>
        <UseEffect />
        <SnapshotDemo />
      </React.StrictMode> */}
      <Provider store={store}>
        <CompanyList />
      </Provider>

    </div>
  );
}

export default App;
