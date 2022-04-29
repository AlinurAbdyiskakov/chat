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
        div className = { classes.hello1 } > < span className = { classes.span1 } > ЛАМИНИРОВАНИЯ РЕСНИЦ + ОКРАШИВАНИЕ 1500 Р < /span> <p>  <
        span className = { classes.Glav } >
        <
        ul > < h1 > Наращивание ресниц < /h1> <
        li > 1 d 1000 P < /li>  <
        li > 2 d 1600 P < /li> <li>   3 d 2200 P</li >
        <
        li > 4 d 2800 P < /li> <li>Лучики 300 Р</li >
        <
        li > Снятие 300 Р < /li> </ul >



        <
        /span> ,  <
        /p></div >


        <
        img className = { classes.img1 }
        src = { img13 }
        alt = "helo" / >

        <
        div className = { classes.Conteiner } >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < /div > < img alt = "img2"
        src = { img2 }
        /></div >
        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < /div > < img alt = "img2"
        src = { img3 }
        /></div >

        <
        div className = { classes.img123 } > < div className = { classes.H1 } > < /div > < img alt = "img2"
        src = { img7 }
        /> <
        /div > <
        div className = { classes.img123 } > < div className = { classes.H1 } > < /div > < img alt = "img2"
        src = { img8 }
        /></div >
        <
        div className = { classes.chu } > < h2 > ШУГАРИНГ < /h2> <
        div className = { classes.img123 } > < div className = { classes.H1 } > < /div > < img alt = "img2"
        src = { img6 }
        /> <
        /div> <
        ul > < li > НОГИ ПОЛНОСТЬЮ 1200 Р < /li> <
        li > ПОДМЫШКИ 300 Р < /li> <
        li > БИКИНИ 1000 Р < /li> <
        li > КЛАССИЧЕСКОЕ БИКИНИ 500 Р < /li> <
        li > РУКИ ПОЛНОСТЬЮ < /li></ul >
        <
        /div>

        <
        /div> <footer > < img alt ="whatsApp icons" src = { WhatsApp } /
        > < span className = { classes.helo } > +7 996 627 82 73 < /span >  <
        span > -Adina < /span></footer >
        <
        /div>
    )
}

export default Adina;