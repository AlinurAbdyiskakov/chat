import classes from './Zapis.module.css'
import React from 'react'

function Zapis() {
    return ( <
        div >
        <
        h1 > Записаться < /h1> <
        div > < div className = { classes.space } > < label > Ф.И.О < /label><input/ > < /div> <
        div className = { classes.space } > < label > Email < /label><input/ > < /div> <
        div className = { classes.space } > < label > Сообщение < /label><input/ > < /div></div >
        <
        /div>
    )
}

export default Zapis