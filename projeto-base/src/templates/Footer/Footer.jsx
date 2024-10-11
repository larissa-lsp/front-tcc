import '../Footer/Footer.css'
import IconeLogo from "../../assets/images/IconeLogo.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">

            <div>
                <p className="direitos">Copyright &copy; {new Date().getFullYear()} Portal360</p>
                <p>Fique sempre por dentro das notícias do mundo tecnológico conosco!</p>
            </div>

            <div>
                <img src={IconeLogo} alt="Logo 360" />
                <Link to={'/login'} className="acesso-restrito"><br />
                    <p className='my-3'>Acesso Restrito</p>
                </Link>
            </div>

            <div>
                <ul>
                    <p>Redes sociais</p>
                    <li>Instagram</li>
                    <li>X (Twitter)</li>
                    <li>Github</li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer