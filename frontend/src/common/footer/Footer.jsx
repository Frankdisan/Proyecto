import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png"
import "./footer.css"

function Footer() {
    return (
    <footer>
        <section id="contacto">
            <h3>Contáctame:</h3>
            <ul>
                <li>Francisco Di Sanzo</li>
                <li><img id="logodewpp" src={whatsapp} alt="Logo de Whatsapp" title="Logo de Whatsapp"/><b>+598 91 991 989</b></li>
            </ul>
        </section>
        <section id="misredes">            
            <h3>Mis redes:</h3>
            <a id="face" className="misredesA" href="https://facebook.com" rel="noopener noreferrer" target="_Blank"><img src={facebook} alt="facebook" title="facebook"/></a>
            <a id="insta" className="misredesA" href="https://www.instagram.com/fran_disanzo/" rel="noopener noreferrer" target="_Blank"><img id="insta"src={instagram} alt="instagram" title="instagram"/></a>
            <a id="twitter" className="misredesA" href="https://twitter.com" rel="noopener noreferrer" target="_Blank"><img src={twitter} alt="twitter" title="twitter"/></a>
            <a id="linke" className="misredesA" href="https://linkedin.com" rel="noopener noreferrer" target="_Blank"><img src={linkedin} alt="linkedin" title="linkedin"/></a>
        </section>
    </footer>
    )
}

export default Footer;

