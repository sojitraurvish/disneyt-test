
import './App.css';
import {Route,Routes} from "react-router-dom"
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route index path="/home" element={<Home/>}/>
        <Route index path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );  
}

export default App;
