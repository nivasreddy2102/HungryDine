import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import { lazy,Suspense,useEffect,useState } from "react";
import Context from "./utils/UserContextTemp"
import { Provider } from "react-redux";
import appStore from "./utils/middleStore";
import Cart from "./components/Cart";
import Success from "./components/Success";

const Grocery=lazy(()=>import("./components/Grocery"))
const Applayout = () => {
  const[data,setData]=useState();
  useEffect(()=>{

  const data={
    name:"Nivas Reddy"
  };
  setData(data.name)
 
},[]);
  return (
    <Provider store={appStore}>
    <Context.Provider value={{loggedInUser:data,setData}}>
    <div>
      <Header />
      <Outlet/>
      
    </div>
      </Context.Provider>
      </Provider>
  );
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
         {
    path:"/",
    element:<Body/>,
  },
      {
    path:"home",
    element:<Body/>,
  },
  {
    path:"cart",
    element:<Cart/>
  },
  {
    path:"contact", 
    element:<Contact/>
  },
  {
    path:"success",
    element:<Success/>
  },
  {
  path:"/restaurant/:id",
  element:<RestaurantMenu/>
  },
  {
  path:"/about",
  element:<About/>
  },
  {
  path:"/grocery",
  element:<Suspense fallback={<h2>LOADING...</h2>}><Grocery/></Suspense>
  }

    ]

  },
  
])

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider router={approuter}/>);
