import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import Searchstud from './component/Searchstud';
import DeleteStud from './component/DeleteStud';
import Viewstud from './component/Viewstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

<Route path='/' element= { <AddStudent/> }/>
<Route path='/Searchstud' element= { <Searchstud/> }/>
<Route path='/Viewstud' element= { <Viewstud/> }/>
<Route path='/DeleteStud' element= { <DeleteStud/> }/>











    </Routes>
    
    
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
