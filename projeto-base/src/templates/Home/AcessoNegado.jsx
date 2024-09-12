import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import logo from '../../assets/images/denied.png'
import UsuarioService from "../../services/UsuarioService"

const AcessoNegado = () => {

    const currentUser = UsuarioService.getCurrentUser();

    return (
        <div className="container">
            <div className="p-3 w-100">
                <Header
                    goto={'/'}
                    title={'Acesso Negado!'}
                    logo={logo}
                />
                <h2 className="text-center text-danger mt-5 py-2">
                    Acesso permitido apenas para pessoas autorizadas!
                </h2>
            </div>
        </div>
    )
}

export default AcessoNegado