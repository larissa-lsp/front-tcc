import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import UsuarioService from "../../services/UsuarioService"
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const AcessoNegado = () => {

    const currentUser = UsuarioService.getCurrentUser();

    return (
        <div className="container">
            <div className="p-3 w-100">
                <h2 className="text-center text-danger mt-5 py-2">
                    Acesso permitido apenas para pessoas autorizadas!
                </h2>
            </div>
        </div>
    )
}

export default AcessoNegado