import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import {Toaster} from "react-hot-toast";
function App() {
  return (
    
    <div className="App">
    <Toaster></Toaster>
    <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
