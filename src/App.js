import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Component/NavBar/Navbar';
import {Container} from "react-bootstrap"
import Admin from './Component/Admin/Admin';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import { createContext, useState } from 'react';
import PrivateRouter from './Component/PrivateRouter/PrivateRouter';
import Cart from './Component/Cart/Cart';

export const Usercontext=createContext();


function App() {
  const [loggedinuser, setloggedinuser]=useState({});
  return (
    <Usercontext.Provider value={[loggedinuser,setloggedinuser]}>
    <Router>
        <Navbar/>
        <Container>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRouter path="/admin">
              <Admin/>
          </PrivateRouter>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRouter path="/cart/:bookID">
          <Cart/>
          </PrivateRouter>
          <PrivateRouter  path="/orders">
            <Orders/>
          </PrivateRouter>
          <PrivateRouter path="/cart">
            <Cart/>
          </PrivateRouter>
        </Switch>
        </Container>
    </Router>
    </Usercontext.Provider>

  );
}

export default App;
