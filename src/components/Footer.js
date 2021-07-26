import Logo from '../assets/logo.png'

const Footer = () => {
    return ( 
        <div className="footer width-container">
            <img className="logo" src={Logo} alt="Decobello logo"/>
            <div className="border80"></div>
            <div className="footer-menu">
                <a href="/">O mnie</a>
                <a href="/">Oferta</a>
                <a href="/">Galeria</a>
                <a href="/">Kontakt</a>
            </div>
            <div className="border80"></div>
            <div className="footer-contact">
                <span>tel: XXX-XXX-XXX</span> <span>email: decobello.art@gmail.com</span>
            </div>
            <p>@Decobello 2021, Wszystkie prawa zastrzeżone</p>
        </div>
     );
}
 
export default Footer;