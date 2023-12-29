import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgetpassword from './components/Auth/Forgetpassword';
import Contact from './components/Contact/Contact';
import Resetpassword from './components/Auth/Resetpassword';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Subscribe/Subscribe';
import NotFound from './components/NotFound/NotFound';
import PaymentSuccess from './components/Subscribe/PaymentSuccess';
import PaymentFail from './components/Subscribe/PaymentFail';

function App() {
  return <Router>
     <Header/>
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/request' element={<Request />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgetpassword' element={<Forgetpassword />}/>
      <Route path='/resetpassword/:token' element={<Resetpassword />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/subscribe' element={<Subscribe />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
      <Route path='/paymentfail' element={<PaymentFail />}/>


    </Routes>
    
    <Footer />
  </Router>
}

export default App;
