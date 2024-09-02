import { Link } from "react-router-dom";
import './Header.css';

const Header = ({goto, title, logo}) => {

    return (
        <div className=" header
            d-flex justify-content-between align-items-center 
            p-3 border-bottom shadow rounded">
            <Link to={goto} className="btn-voltar btn btn-info shadow">Voltar</Link>
                <img src={title} alt="Logo Título" class="logo-titulo"/>
            <div>
                <img src={logo} alt="logo" class="logo"/>
            </div>
        </div>
    )
}

export default Header