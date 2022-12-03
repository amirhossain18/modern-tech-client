
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';





function App() {

  const router= createBrowserRouter([

   {
     path: '/',
     element:<Main></Main>,
     children: [
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/blog',
      element: <Blog></Blog>
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
