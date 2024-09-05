import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const ProdutosLista = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/produtoeditar')
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/produto'}
                    title={'Lista de Produtos'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button type="button" onClick={() => goTo()}
                                            className="btn btn-sm btn-warning">
                                            <i className="bi bi-envelope-open me-2"></i>Abrir
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProdutosLista