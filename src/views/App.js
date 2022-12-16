import Home from './home';
import './App.scss';
import Nav from './navigation';

import Mycomponent from '../components/example/myComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import ListUsers from '../components/users/handleViewUsers';
import DetailUser from '../components/users/detailUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path= '/Job'>
              <Mycomponent />
          </Route>
          <Route path= '/About'>
            <div style={{color: 'red'}}>Coming soon</div>
          </Route>
          <Route path= '/Users' exact>
            <ListUsers />
          </Route>
          <Route path='/User/:id'>
            <DetailUser />
          </Route>
        </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
