import './App.css';


import { Route } from 'react-router';

import Home from './components/Adina/Adina';


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
        component = { Home }
        />   <Route path = "/anime
        "
        component = { Home }
        />  <Route path = "/redux
        "
        component = { Home }
        /> 


        <
        /div >
    );
}

export default App;