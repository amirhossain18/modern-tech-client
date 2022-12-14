
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blog from './Components/Blog/Blog';
import Faq from './Components/Course/ConditionFAQ/Faq';
import Course from './Components/Course/Course';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Main from './Components/Main/Main';
import Regestration from './Components/Login/Regestration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';





function App() {

  const router= createBrowserRouter([

   {
     path: '/',
     element:<Main></Main>,
     children: [
    {
      path:'/',
      element: <Home></Home>,
    },
    {
      path:'/blog',
      element: <PrivateRoute><Blog></Blog></PrivateRoute>,
    }, 
    {
      path:'/courses',
      loader: ()=> fetch('https://modern-tech-server.vercel.app/courses'), 
      element: <Course></Course>,
    },
    {
      path:'/login',
      element: <Login></Login>,
    },
    {
      path:'/regestration',
      element: <Regestration></Regestration>
    },
    {
      path:'/faq',
      element:<Faq></Faq>,
    },
    {
      path:'/courses/:id',
      element:<CourseDetails></CourseDetails>,
    }

     ]

   }


  ])
  
  return (
    <div className="App">
   
    <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
