
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blog from './Components/Blog/Blog';
import Faq from './Components/Course/ConditionFAQ/Faq';
import Course from './Components/Course/Course';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Regestration from './Components/Login/Regestration';





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
      element: <Blog></Blog>,
    }, 
    {
      path:'/courses',
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
