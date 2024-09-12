import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'


const NoticiaEditar = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/noticia'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">

                        <div className="col-md-12">
                            <label htmlFor="usuario_id" className="form-label">Usuário ID</label>
                            <input type="text" className="form-control" id="usuario_id" />
                        </div>

                        <div className="col-md-1">
                            <label htmlFor="inputId" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputId" />
                        </div>

                        <div className="col-md-11">
                            <label htmlFor="inputManchete" className="form-label">Manchete:</label>
                            <input type="text" className="form-control" id="inputManchete" />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="inputConteudo" className="form-label">Conteúdo:</label>
                            <textarea rows={20} className="form-control" id="inputConteudo" >
                            </textarea>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="inputPalavrasChave" className="form-label">Palavras-chave:</label>
                            <textarea rows={2} className="form-control" id="inputPalavrasChave">
                            </textarea>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputDataEnvio" className="form-label">Data de envio</label>
                            <input type="date" className="form-control" id="inputDataEnvio" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputDataPublicacao" className="form-label">Data de publicação</label>
                            <input type="date" className="form-control" id="inputDataPublicacao" />
                        </div>

                        <div className="form-group col-md-9">
                            <label htmlFor="inputFonte" className="form-label">Fonte:</label>
                            <input type="text" className="form-control" id="inputFonte" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="inputFoto" className="form-label">Foto:</label>
                            <input type="file" className="form-control-file" id="inputFoto" />
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

export default NoticiaEditar