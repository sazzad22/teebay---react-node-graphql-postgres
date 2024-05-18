// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Signin from './pages/signin';
import UserHome from './pages/UserHome';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/user-home' element={<UserHome></UserHome>}></Route>
        <Route path='/all-products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
      </Routes>

    </div>
  );
}

export default App;
