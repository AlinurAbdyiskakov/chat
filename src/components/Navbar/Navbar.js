import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import { Button, GridDirection } from '@material-ui/core';

function Navbar() {
    return ( <
        AppBar color = { "secondary" }
        position = "static" >
        <
        Toolbar >
        <
        Gred conteiner justify = { "flex-end" } >
        <
        Button variant = { "outlined" } > Login < /Button> <
        Button variant = { "outlined" } > exet < /Button> <
        /Gred> <
        /Toolbar> <
        /AppBar>
    )
}

export default Navbar