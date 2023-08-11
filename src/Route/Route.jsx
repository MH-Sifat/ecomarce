import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Inventory from "../pages/Inventory/Inventory";
import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import Review from "../pages/Review/Review";




const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/order',
          element:<Shop></Shop>
        },
        {
          path:'/review',
          element:<Review></Review>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/Login',
          element:<Login></Login>
        },
        
      ]
    }
  ])

  export default router;