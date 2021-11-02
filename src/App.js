import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
    return ( <div className = "App" >
        <BrowserRouter >
        < Navbar/> <AppRouter/> </BrowserRouter> 
        </div>
    );
}

export default App;