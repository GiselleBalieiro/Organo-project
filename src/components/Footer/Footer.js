import "./Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="www.linkedin.com/in/gisellebalieiro" target="_blank">
                            <img className="logo-linkedin"src="/imagens/linkedin.png"/>
                        </a>
                    </li>
                    <li>
                        <a href="github.com/GiselleBalieiro" target="_blank">
                            <img src="/imagens/github.png"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img className="logo" src="/imagens/logo.png"/>
            </section>
            <section>
                <p>
                    Desenvolvido no curso da Alura
                </p>
            </section>
        </footer>
    )
}

export default Footer;