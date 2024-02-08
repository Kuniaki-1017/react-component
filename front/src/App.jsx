/* ルーティング用のライブラリを読み込み */
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import './resset.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Category from './pages/Category/Category';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';
import Faborite from './pages/Faborite/Faborite';
import Admin from './pages/Admin/Admin';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/faborite" element={<Faborite/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
   
    
  )
}

export default App;
