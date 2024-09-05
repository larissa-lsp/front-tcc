import React from 'react'
import { Link } from 'react-router-dom'
import TecnologiaImage from '../../assets/images/Tecnologia1.png'
import TrabalhandoImage from '../../assets/images/trabalhando.png'
import InstagramIcon from '../../assets/images/instagram.png'
import LinkedInIcon from '../../assets/images/linkedin.png'
import FacebookIcon from '../../assets/images/facebook.png'
import './HomeNoticia.css';
import Home from '../Home/Home'

const HomeNoticia = () => {
    return (
        
            <footer className="footer">
                <div className="footer-direitos">
                    <p>Todos direitos reservados Portal360 Ltda.</p>
                </div>

                <Link to={'/login'}
                    className='btn btn-sm btn-warning'>
                    Acesso Restrito
                </Link>

                <div className="redes-sociais">
                    <ul>
                        <h2>Redes sociais</h2>
                        <li><img src={InstagramIcon} alt="Instagram" width="5%" /> Instagram</li>
                        <li><img src={LinkedInIcon} alt="Linkedin" width="5%" /> Linkedin</li>
                        <li><img src={FacebookIcon} alt="Facebook" width="5%" /> Facebook</li>
                    </ul>
                </div>
            </footer>
    );
};

export default HomeNoticia