import classes from './Zapis.module.css'
import React from 'react'

function Zapis() {
    return ( <
        div >
        <
        h1 > Записаться < /h1> <
        div > < div className = { classes.space } > < label > Ф.И.О < /label><input type="text"/ > < /div> <
        div className = { classes.space } > < label > Email < /label><input type="text"/ > < /div> <
        div className = { classes.space } > < label > Сообщение < /label><input type="text"/ > < /div></div >
        <
        button > Отправит < /button> <
        /div>
    )
}

export default Zapis