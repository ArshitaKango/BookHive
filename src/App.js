import {Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>}/>
      <Route path="/login" element={<h1>login</h1>}/>
    </Routes>
  );
}

export default App;
