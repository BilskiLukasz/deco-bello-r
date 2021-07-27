import { useEffect, useState } from "react";
import MenuItem from './MenuItem'

const NavBar = () => {
    const [isMenuActive, setMenuActive]  = useState(false);

    useEffect(()=>{
        document.querySelector('body').classList.toggle('hide-scroll')
    },[isMenuActive])

    return ( 
        <div className="width-container">
            <div className="navbar">
                <div className="logo"></div>
                <div className={`menu ${isMenuActive ? "menu-active" : ""}`}>
                    <MenuItem href="#about" text="O mnie" delay={0} active={isMenuActive}/>
                    <MenuItem href="#" text="Oferta" delay={1} active={isMenuActive}/>
                    <MenuItem href="#gallery" text="Galeria" delay={2} active={isMenuActive}/>
                    <MenuItem href="#contact" text="Kontakt" delay={3} active={isMenuActive}/>
                </div>
                <div className={`hamburger ${isMenuActive ? "hamburger-active" : ""}`} onClick={() => setMenuActive(!isMenuActive)}>
                    <div className="hamburger-bar1"></div>
                    <div className="hamburger-bar2"></div>
                    <div className="hamburger-bar3"></div>
                </div>
            </div>
        </div> 
    );
}
 
export default NavBar;