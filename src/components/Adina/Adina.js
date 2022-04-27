import React from 'react'
import classes from './Adina.module.css'
import img13 from '../../Imges/img1.jpg'
import img2 from '../../Imges/img2.jpg'
import img3 from '../../Imges/img3.jpg'

import img6 from '../../Imges/img124.jpg'
import img7 from '../../Imges/img125.jpg'
import img8 from '../../Imges/img126.jpg'
import WhatsApp from '../../Imges/whatsapp.png'

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
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 1 d 1000 P < /h1></div > < img alt = "img2"
        src = { img2 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 2 d 1600 P < /h1></div > < img alt = "img2"
        src = { img3 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 3 d 2200 P < /h1></div > < img alt = "img2"
        src = { img6 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > 4 d 2800 P < /h1></div > < img alt = "img2"
        src = { img7 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < h1 > Снятие 300 Р Лучики 300 Р < /h1></div > < img alt = "img2"
        src = { img8 }
        /></div >

        <
        /div> <footer > < img alt = "whatsApp icons"
        src = { WhatsApp }
        /><span className={classes.helo}>+7 996 627 82 73</span > < span > -Adina < /span></footer >
        <
        /div>
    )
}

export default Adina;