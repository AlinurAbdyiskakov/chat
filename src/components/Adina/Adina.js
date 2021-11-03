import React from 'react'
import classes from './Adina.module.css'
import img13 from '../../Imges/img1.jpg'
import img2 from '../../Imges/img2.jpg'
import img3 from '../../Imges/img3.jpg'


function Adina() {
    return ( < div className = { classes.Adina } >
        <
        div className = { classes.hello1 } > < span className = { classes.span1 } > У Адины вы сможете < /span> <p> Cделать идеальный качественный <
        span className = { classes.Glav } > ЛАМИНИРОВАНИЯ РЕСНИЦ < /span> , 
        а также уход за вашими ресницами принимает домашнем уюте < /p></div >


        <
        img className = { classes.img1 }
        src = { img13 }
        alt = "helo" / >

        <
        div className = { classes.Conteiner } >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 1000 P < /h1></div > < img alt = "img2"
        src = { img2 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 1000 P < /h1></div > < img alt = "img2"
        src = { img3 }
        /></div >

        <
        /div> <
        /div>
    )
}

export default Adina;