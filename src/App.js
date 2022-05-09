import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddInventory from './Pages/AddInventory/AddInventory';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>


       <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route> 
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>

        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/addInventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        {/* <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route> */}



        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

       </Routes>



      <ToastContainer/>
       <Footer></Footer>

    </div>
  );
}

export default App;