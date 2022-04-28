import classes from "./Nav.module.css";
import NavItem from "../NavItem/NavItem";


const Nav = () => {

    return ( < ul className = { classes.Nav } >

        <
        NavItem url = "/"
        exact > Главный < /NavItem>   <
        NavItem url = "/musec2" > Сертификат <
        /NavItem> <
        NavItem url = "/musec" > Записаться:
        <
        /NavItem>


        <
        /ul>
    )
}

export default Nav;