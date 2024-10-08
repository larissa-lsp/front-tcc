import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import NewUser from '../../assets/images/novoUsuario.png'
import imgUsuarioLista from "../../assets/images/Add User-cuate.png"

const Usuario = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">

                        <Link to={'/usuarionovo'}
                            className="btn btn-lg btn-primary">
                            Novo Usuário
                        </Link>
                        <Link to={'/usuarioslista'}
                            className="btn btn-lg btn-warning">
                            Lista de Usuários
                        </Link>
                    </div>
                    <br />
                    <div className="text-center">
                        <img src={imgUsuarioLista} alt="img-lista" width="40%" height="40%" /><br />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Usuario