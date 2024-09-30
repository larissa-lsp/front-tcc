import '../HeaderNoticia/HeaderNoticia.css'
import LogoTitulo from '../../assets/images/LogoTitulo.png'


function HeaderNoticia(){
    return(
        <div className="header">
        <img src={LogoTitulo} alt="Portal360" className="imgTitulo"/>

        <nav className="navBar">
            <a href="#">Início</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Fale Conosco</a>
        </nav>

        </div>
    );
}

export default HeaderNoticia