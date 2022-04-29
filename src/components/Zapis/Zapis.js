import React from 'react'
import emailjs from 'emailjs-com'
import classes from './Zapis.module.css'

function Zapis() {
    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_8sd7yz7', 'template_v5kfyz1', e.target, 'user_0Pk5tbcbJAxlB1kZJgXJk').then(res => {
            console.log(res);
        }).catch(err => { console.log(err); })
    }
    return ( < div className = { classes.container } >

        <
        form className = { classes.Zapis }
        onSubmit = { sendEmail } >
        <
        label > Name < /label> <
        input name = "lastname"
        type = "text"
        placeholder = "name" / >
        <
        label > Email < /label> <
        input name = "email"
        type = "email"
        placeholder = "email" / >
        <
        label > message < /label>  <
        textarea name = "ms"
        type = "text"
        placeholder = "message" / >
        <
        label > Tel: < /label> <
        input type = "tel"
        name = "tel"
        placeholder = "Tel-number" / >

        <
        input type = "submit"
        value = "Send" / > < /form> </div >
    )
}

export default Zapis;