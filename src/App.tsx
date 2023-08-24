import { useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import AllRoutes from "./Pages/AllRoutes";
import Sidebar from "./Components/SideBar";




function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      {/* <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-yellow-100 bg-indigo-300 font-bold p-4'>
        {
          currentRoute == "/" ? ' Contact Management App' : "Charts and Maps"
        }
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div> */}

      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen ">
          <Sidebar />
        </div>

        <div className="w-full ">
          <div className=" w-full z-50 flex justify-center fixed shadow-md shadow-slate-200 top-0   bg-slate-100  p-4">
            <h1 className="text-3xl font-bold mx-10">
              {currentRoute == "/chart"
                ? "Charts and Maps "
                : " Contact Management App"}
            </h1>
            
          </div>

          <div className=" w-full ">
            <AllRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
