import {Routes,Route} from 'react-router-dom';

//components




//pages

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
  
    <Routes>
      <Route path="/" element={<h1>home</h1>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
