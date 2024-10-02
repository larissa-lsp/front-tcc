import '../HeaderNoticia/HeaderNoticia.css'
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { Link } from 'react-router-dom';


function HeaderNoticia() {
    return (
        <div className="header">

    <nav className="navBar">
            <img src={LogoTitulo} alt="Portal360" className="imgTitulo" />

           
                <Link className="nav-link" to={'/'}>Início</Link>
                <Link className="nav-link" to={'/sobrenos'}>Sobre nós</Link>
                <Link className="nav-link" to={'/faleconosco'}>Fale Conosco</Link>
            </nav>
        </div>
    );
}

export default HeaderNoticia