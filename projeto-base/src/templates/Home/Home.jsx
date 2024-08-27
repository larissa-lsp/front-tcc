import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import UsuarioService from "../../services/UsuarioService"
import AcessoNegado from "./AcessoNegado"

const Home = () => {

    const currentUser = UsuarioService.getCurrentUser();

    return (
        <>
            {currentUser ?
                <div className="d-flex">
                    <Sidebar />
                    <div className="p-3 w-100">
                        <Header
                            goto={'/home'}
                            title={'Home'}
                            logo={logo}
                        />
                        <h2 className="user-nome fw-bold fst-italic">Bem-vindo {currentUser.nome}!</h2>
                    </div>
                </div> :
                <AcessoNegado />
            }
        </>
    )
}

export default Home