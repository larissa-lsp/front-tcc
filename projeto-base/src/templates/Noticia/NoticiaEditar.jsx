import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const ProdutoEditar = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/noticia'}
                    title={'Editar Notícia'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-1">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly />
                        </div>
                        <div className="col-md-7">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputCodigo" className="form-label">Código</label>
                            <input type="text" className="form-control" id="inputCodigo" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputPreco" className="form-label">Preço</label>
                            <input type="text" className="form-control" id="inputPreco" />
                        </div>

                        <div className="col-md-10">
                            <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                            <textarea rows={5} className="form-control" id="inputDescricao" >
                                </textarea>
                        </div>
                        

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default ProdutoEditar