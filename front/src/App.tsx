import Home from '../pages/home/Home';
import Comp from '../pages/comp/Comp';
import Todo from '../pages/todo/Todo';
import './resset.css';
/* ルーティング処理用のモジュール読込 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Template from '../template/Template';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comp" element={<Comp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>


  )

};

export default App;
