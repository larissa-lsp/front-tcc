import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const Noticia = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/noticianova'}
                            className="btn btn-lg btn-primary">
                            Nova Notícia
                        </Link>
                        <Link to={'/noticiaslista'}
                            className="btn btn-lg btn-warning">
                            Lista de Notícias
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Noticia