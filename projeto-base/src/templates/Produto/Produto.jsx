import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const Produto = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={'Produto'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/produtonovo'}
                            className="btn btn-lg btn-primary">
                            Novo Produto
                        </Link>
                        <Link to={'/produtoslista'}
                            className="btn btn-lg btn-warning">
                            Lista de Produtos
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Produto