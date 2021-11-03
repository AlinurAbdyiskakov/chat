import './App.css';


import { Route } from 'react-router';

import Home from './components/Adina/Adina';
import HOm1 from './components/Zapis/Zapis'

import Layout from './components/Layout/Layout'



function App() {
    return ( < div className = "App" >
        <
        div className = "Toolbar" >

        <
        Layout / >

        <
        /div>


        <
        Route path = "/"
        component = { Home }
        exact / >
        <
        Route path = "/musec"
        component = { HOm1 }
        />  


        <
        /div >
    );
}

export default App;