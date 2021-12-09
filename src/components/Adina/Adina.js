import React from 'react'
import classes from './Adina.module.css'
import img13 from '../../Imges/img1.jpg'
import img2 from '../../Imges/img2.jpg'
import img3 from '../../Imges/img3.jpg'
import img4 from '../../Imges/sert.jpg'
import img5 from '../../Imges/sert2.jpeg'
import WhatsApp from '../../Imges/whatsapp.png'

function Adina() {
    return ( <div className = { classes.Adina } >
        <div className = { classes.hello1 } > <span className = { classes.span1 } > У Адины вы сможете </span> <p> Cделать идеальный качественный <
        span className = { classes.Glav } > ЛАМИНИРОВАНИЯ РЕСНИЦ </span> , 
        а также уход за вашими ресницами принимает домашнем уюте </p></div >


        <img className={classes.img1} src = { img13 }
        alt = "helo"/>

        <div className={classes.Conteiner}>
            <div className={classes.img123}><div className={classes.H1}><h1>1000P</h1></div> <img  alt="img2" src={img2}/></div>
        <div className={classes.img123}  ><div className={classes.H1}><h1>1000P</h1></div> <img  alt="img2" src={img3}/></div>  
        
        </div>
        <div className={classes.Sertificat}><div className={classes.Zagalovok}>Сертификаты</div>
        <div className={classes.icons}><div className={classes.phone}><img src={img4}  alt="img4"/></div>
        <div className={classes.phone}><img src={img5}  alt="img5"/></div></div></div>
        <footer><img alt="whatsApp icons" src={WhatsApp}/><span className={classes.helo}>+7 996 627 82 73</span><span>-Adina</span></footer>
        </div>
    )
}

export default Adina;