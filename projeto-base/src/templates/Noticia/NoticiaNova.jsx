import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';

const NoticiaNova = () => {

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
                        <div className="form-group col-md-12">
                            <label for="usuario_id" className="col-form-label">Usuário ID</label>
                            <input type="text" className="form-control" id="usuario_id" placeholder="ID colaborador" readonly />
                        </div>

                        <div className="form-group col-md-1">
                            <label for="id" className="col-form-label">ID</label>
                            <input type="text" className="form-control" id="id" placeholder="ID" readonly />
                        </div>

                        <div className="form-group col-md-11">
                            <label for="manchete" className="col-form-label">Manchete:</label>
                            <input type="text" className="form-control" id="manchete" placeholder="Manchete" required />
                        </div>

                        <div className="form-group col-md-12">
                            <label for="conteudo" className="col-form-label">Conteúdo:</label>
                            <textarea className="form-control" id="conteudo" rows="20" placeholder="Insira seu texto aqui" required></textarea>
                        </div>

                        <div className="form-group col-md-12">
                            <label for="palavrasChave" className="col-form-label">Palavras-chave:</label>
                            <textarea className="form-control" id="palavrasChave" rows="2" placeholder="Palavras-chave" required></textarea>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="dataPublicacao" className="col-form-label">Data de envio</label>
                            <input type="date" className="form-control" id="dataEnvio" placeholder="Data de envio" readonly />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="dataPublicacao" className="col-form-label">Data de publicação</label>
                            <input type="date" className="form-control" id="dataPublicacao"
                                placeholder="Data de publicação" readonly />
                        </div>

                        <div className="form-group col-md-9">
                            <label for="fonte" className="col-form-label">Fonte:</label>
                            <input type="text" className="form-control" id="fonte" placeholder="" required />
                        </div>

                        <div className="form-group col-md-12">
                            <label for="foto" className="col-form-label">Foto:</label>
                            <input type="file" field="*{foto}" className="form-control-file" id="foto" />
                        </div>

                        <div className="form-group col-md-12 text-right">
                            <input type="submit" className="btn btn-secondary mb-2" value="Gravar Nova Notícia" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default NoticiaNova