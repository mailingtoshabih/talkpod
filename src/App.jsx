import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Errorpage } from './pages/Errorpage';
import { Register } from './pages/Registering/Register';
import { Login } from './pages/Login';
import { Allrooms } from './pages/Allrooms';
import { Room } from './pages/Room';
import { useRefresh } from './hooks/useRefresh';

import { useSelector, useDispatch } from "react-redux";
import { Activation } from "./pages/Registering/Activation";
import { Loader } from "./components/Loader";







function App() {

  
  const { loading } = useRefresh();
  const { isAuth } = useSelector((state) => state.auth);
  const isActive = useSelector((state) => state.auth?.user?.activated);


  // this function is used as an element below
  const check = () => {
    if (isActive && isAuth) return <Allrooms/>;
    else if (isAuth ) return <Activation/>;
    else return <Home/>;
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: isActive ? <Allrooms /> : <Home/>,
      errorElement: <Errorpage />
    },
    {
      path: "/activate",
      element: check(),
      errorElement: <Errorpage />
    },
    {
      path: "/rooms",
      element: isActive ? <Allrooms /> : <Activation />,
      errorElement: <Errorpage />
    },
    {
      path: "/room/:id",
      element: isActive ? <Room /> : <Login />,
      errorElement: <Errorpage />
    },
    {
      path: "/register",
      element: isAuth ? <Activation /> : <Register />,
      errorElement: <Errorpage />
    }
  ]);






  return (

    <div className='font-poppins'>
      {
        loading ?
        <Loader/>
        :
        <RouterProvider router={router} />
      }

    </div>
  )
}

export default App


// ----------------------------------
// ----------------------------------
