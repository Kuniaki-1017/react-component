/* ルーティング用のライブラリを読み込み */
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import './resset.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="/" element={<Search/>}/>
      <Route path="/" element={<Category/>}/>
      <Route path="/" element={<Detail/>}/>
      <Route path="/" element={<Detail/>}/>
      <Route path="/" element={<Faborite/>}/>
      <Route path="/" element={<Admin/>}/>
    </Routes>
   
    
  )
}

export default App;
