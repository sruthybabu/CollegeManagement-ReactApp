import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './components/AddStudent';
import AddFaculty from './components/AddFaculty';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/" exact element={<AddStudent/>}/>
<Route path="/add" exact element={<AddFaculty/>}/>
<Route path="/search" exact element={<SearchStudent/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
