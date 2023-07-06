import './App.css';
// import Header from './components/Header';
import Layout from './components/Layout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
