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
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourse/AdminCourses';
import Users from './components/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast,{ Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';

function App() {

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  });

  const { isAuthenticated, user,message, error} = useSelector(
    state => state.user
  );

  
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return <Router>
     <Header isAuthenticated={isAuthenticated} user={user} />
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/course/:id' element={<CoursePage />}/>
      <Route path='/request' element={<Request />}/>
      <Route path='/login' element={ <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>}/>

      <Route path='/profile' element={  <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile/>
                </ProtectedRoute>}/>
      <Route path='/changepassword' element={<ChangePassword />}/>
      <Route path='/updateprofile' element={<UpdateProfile />}/>


      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"> 
                 <Register />
                </ProtectedRoute>}/>
      <Route path='/forgetpassword' element={<Forgetpassword />}/>
      <Route path='/resetpassword/:token' element={<Resetpassword />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/subscribe' element={<Subscribe />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
      <Route path='/paymentfail' element={<PaymentFail />}/>
      <Route path='/admin/dashboard' element={<Dashboard/>} />
      <Route path='/admin/createcourse' element={<CreateCourse/>} />
      <Route path='/admin/courses' element={<AdminCourses/>} />
      <Route path='/admin/users' element={<Users/>} />
  
  </Routes>
    
    <Footer />
   <Toaster />
  </Router>
}

export default App;
