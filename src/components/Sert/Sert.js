import React from 'react'
import sert from '../../Imges/sert.jpg'
import sert2 from '../../Imges/sert2.jpeg'
import classes from './Sert.module.css'

function Sert() {

    return ( < div className = { classes.Sert } >
        <
        img src = { sert }
        alt = 'sert' / >
        <
        img src = { sert2 }
        alt = 'sert' / >

        <
        /div>
    )
}
export default Sert;