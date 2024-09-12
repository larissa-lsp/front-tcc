import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';

const NoticiaNova = () => {
    const objectValues = {
        usuario_id: "",
        id: "",
        manchete: "",
        conteudo: "",
        palavrasChave: "",
        dataEnvio: "",
        dataPublicacao: "",
        fonte: "",
        foto: "",
    };
    const [noticia, setNoticia] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        if (formData.usuario_id != undefined && formData.email != undefined && formData.texto != undefined) {
            NoticiaService.create(formData).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }, (error) => {
                    const message = error.response.data.message;
                    setMessage(message);
                }
            )
        }
    }
    */

    return (
        <div className="d-flex">
            <Sidebar />
            <Header
                    goto={'/noticia'}
                    title={LogoTitulo}
                    logo={logo}
                />
            <section className="m-2 p-2 shadow-lg">
                <form className="row g-3">
                    {!successful && (
                        <>
                            <div className="form-group col-md-12">
                                <label htmlFor="usuario_id" className="col-form-label">Usuário ID</label>
                                <input type="text" className="form-control" id="usuario_id" placeholder="ID colaborador" readonly
                                    name="usuario_id"
                                    value={formData.usuario_id || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-1">
                                <label htmlFor="inputId" className="col-form-label">ID</label>
                                <input type="text" className="form-control" id="inputId" placeholder="ID" readonly
                                    name="id"
                                    value={formData.id || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-11">
                                <label htmlFor="inputManchete" className="col-form-label">Manchete:</label>
                                <input type="text" className="form-control" id="inputManchete" placeholder="Manchete" required
                                    name="manchete"
                                    value={formData.manchete || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="inputConteudo" className="col-form-label">Conteúdo:</label>
                                <textarea className="form-control" id="inputConteudo" rows="20" placeholder="Insira seu texto aqui" required
                                    name="conteudo"
                                    value={formData.conteudo || ""}
                                    onChange={handleChange} >
                                </textarea>
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="inputPalavrasChave" className="col-form-label">Palavras-chave:</label>
                                <textarea className="form-control" id="inputPalavrasChave" rows="2" placeholder="Palavras-chave" required
                                    name="palavrasChave"
                                    value={formData.palavrasChave || ""}
                                    onChange={handleChange} >
                                </textarea>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputDataEnvio" className="col-form-label">Data de envio</label>
                                <input type="date" className="form-control" id="inputDataEnvio" placeholder="Data de envio" readonly
                                    name="dataEnvio"
                                    value={formData.dataEnvio || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputDataPublicacao" className="col-form-label">Data de publicação</label>
                                <input type="date" className="form-control" id="inputDataPublicacao" placeholder="Data de publicação" readonly
                                    name="dataPublicacao"
                                    value={formData.dataPublicacao || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-9">
                                <label htmlFor="inputFonte" className="col-form-label">Fonte:</label>
                                <input type="text" className="form-control" id="inputFonte" placeholder="" required
                                    name="fonte"
                                    value={formData.fonte || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="inputFoto" className="col-form-label">Foto:</label>
                                <input type="file" className="form-control-file" id="inputFoto"
                                    name="foto"
                                    value={formData.foto || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group col-md-12 text-right">
                                <button className="btn btn-secondary mb-2">Gravar Nova Notícia</button>
                            </div>
                        </>
                    )}
                    
                    {message && (
                        <div className="m-1">
                            <div className={
                                "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                            }>
                                {message}
                            </div>
                        </div>
                    )}
                </form>
            </section>
        </div>
    )
}

export default NoticiaNova