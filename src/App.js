import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
    return ( < div className = "App" >
        <
        BrowserRouter >
        <
        AppRouter / > < Navbar / > < /BrowserRouter>  <
        /div>
    );
}

export default App;