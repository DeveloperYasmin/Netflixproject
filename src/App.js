import ReactDOM from "react-dom/client";
import Login from "./components/Login";

import {Provider} from 'react-redux'
import appStore from "./utils/appStore";
import Header from "./components/Header";
import {RouterProvider,Outlet, createHashRouter } from "react-router-dom";
import Browse from "./components/Browse";

function App() {
  const AppLayout =() =>{
    return (
      <Provider store={appStore}>
     <div>
       <Header/>
       <Outlet/>
           </div>
           </Provider>
    )
  }
  const appRouter=createHashRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
     {
      path:"/",
      element:<Login/>,
     },
     {
      path:"/Browse",
      element:<Browse/>,
     }
    ]},])
  ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)  

  
}

export default App;
