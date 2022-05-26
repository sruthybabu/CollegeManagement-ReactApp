import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './components/AddStudent';
import AddFaculty from './components/AddFaculty';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchFaculty from './components/SearchFaculty';
import ViewStudent from './components/ViewStudent';
import ViewFaculty from './components/ViewFaculty';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/" exact element={<AddStudent/>}/>
<Route path="/add" exact element={<AddFaculty/>}/>
<Route path="/search" exact element={<SearchStudent/>}/>
<Route path="/faculty" exact element={<SearchFaculty/>}/>
<Route path="/view" exact element={<ViewStudent/>}/>
<Route path="viewfac" exact element={<ViewFaculty/>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
