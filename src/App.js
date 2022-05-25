import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './components/AddStudent';
import AddFaculty from './components/AddFaculty';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div>
<AddStudent/>
<AddFaculty/>
<SearchStudent/>
    </div>
  );
}

export default App;
