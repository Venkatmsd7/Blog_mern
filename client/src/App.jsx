import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AdminPrivateRoute from './components/Adminprivateroute';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/signin' element={<SignIn />} />
    <Route path='/about' element={<About/>} />
    <Route path='/about' element={<About/>} />
    <Route element={<PrivateRoute/>} >
    <Route path='/dashboard' element={<Dashboard/>} />
    </Route>
    <Route element={<AdminPrivateRoute/>}>
    <Route path='/createpost' element={<CreatePost/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App