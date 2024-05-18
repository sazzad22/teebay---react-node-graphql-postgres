// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Signin from './pages/signin';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
      </Routes>

    </div>
  );
}

export default App;
