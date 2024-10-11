import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useRef, useState, useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";
import UsuarioService from "../../services/UsuarioService";

const NoticiaEditar = () => {

    const { id } = useParams();
    const _dbRecords = useRef(true);

    const initialObjectState = {
        id: null,
        manchete: "",
        conteudo: "",
        palavrasChave: "",
        dataEnvio: "",
        dataPublicacao: "",
        fonte: "",
        foto: null,
        statusNoticia: ""

    };

    const [noticia, setNoticia] = useState(initialObjectState);

    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);

    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const [chosenImage, setChosenImage] = useState();

    const [visible, setVisible] = useState(false);
    const currentUser = UsuarioService.getCurrentUser();

    const navigate = useNavigate();

    const goto = () => {
        navigate("/home");
    }

    useEffect(() => {
        if(currentUser.nivelAcesso == 'ADMIN'){
            setVisible(false)
        } else {
            setVisible(true)
        }
    }, []);

    useEffect(() => {
        if (_dbRecords.current) {
          
            NoticiaService.findById(id)
                .then(response => {
                    const noticia = response.data;
                    setNoticia(noticia);
                    console.log(noticia);
                })
                .catch(e => {
                    console.log(e);
                });
        } return () => {
            _dbRecords.current = false;
        }
    }, [id]);


    const setChosenFile = (dataFile) => {
        setFile(dataFile);
    }

    const setImage = (dataImage) => {
        setChosenImage(dataImage);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNoticia(noticia => ({ ...noticia, [name]: value }));
    }

    const inativar = (e) => {
        e.preventDefault();
        setSuccessful(false);

        NoticiaService.inativar(id).then(
            (response) => {
                navigate("/successadm");
                setMessage(response.data.message);
                setSuccessful(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        NoticiaService.alterar(file, id, noticia).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                console.log(response.data.message)
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
            }, (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        )
    }

    const publicar = (e) => {
        e.preventDefault();
        setSuccessful(false);

        NoticiaService.publicar(id).then(
            (response) => {
                navigate("/successadm");
                setMessage(response.data.message);
                setSuccessful(false);
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
                <h2 className="m-2 text-center">Editar Notícia</h2><br />
                    <form className="row g-3 m-3 p-3 border shadow rounded-2" onSubmit={handleSubmit} >
                        {!successful && (
                            <>

                                <div className="col-md-1">
                                    <label htmlFor="inputId" className="form-label mb-1 fw-bold mb-1 fw-bold">ID:</label>
                                    <input type="text" className="form-control border border-black" id="inputId" readOnly
                                        name="id"
                                        defaultValue={noticia.id} />
                                </div>

                                <div className="col-md-11">
                                    <label htmlFor="inputManchete" className="form-label mb-1 fw-bold mb-1 fw-bold">Manchete:</label>
                                    <input type="text" className="form-control border border-black" id="inputManchete"
                                        name="manchete"
                                        defaultValue={noticia.manchete}
                                        onChange={handleChange} />

                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputPalavrasChave" className="form-label mb-1 fw-bold mb-1 fw-bold">Palavras-chave:</label>
                                    <textarea rows={2} className="form-control border border-black" id="inputPalavrasChave"
                                        name="palavrasChave"
                                        defaultValue={noticia.palavrasChave}
                                        onChange={handleChange} >

                                    </textarea>
                                </div>
                                
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputFonte" className="form-label mb-1 fw-bold mb-1 fw-bold">Fonte:</label>
                                    <input type="text" className="form-control border border-black" id="inputFonte"
                                        name="fonte"
                                        defaultValue={noticia.fonte} 
                                        onChange={handleChange} />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputConteudo" className="form-label mb-1 fw-bold mb-1 fw-bold">Conteúdo:</label>
                                    <textarea rows={20} className="form-control border border-black" id="inputConteudo"
                                        name="conteudo"
                                        defaultValue={noticia.conteudo}
                                        onChange={handleChange} >
                                    </textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <img className="shadow-lg" src={noticia.foto ? 'data:image/jpeg;base64,' + noticia.foto : logo} alt="..." />
                                </div>
                                
                                <div className="col-md-12 d-flex justify-content-around align-items-center">
                                    <ImageUploaderModal
                                        setFile={setChosenFile}
                                        setImage={setImage}
                                        chosenImage={chosenImage} />

                                    <button type="submit" className="btn btn-danger" onClick={inativar}>
                                        Inativar
                                    </button>
                             
                                    <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
                                        Gravar
                                    </button>

                                    <button type="button" className="btn btn-success"  onClick={publicar} hidden={visible}  >
                                        Publicar
                                    </button>
                                </div>
                            </>
                        )}

                        {message && (
                            <div className="m-1">
                                <div className={
                                    "text-center h4 fst-italic py-4 rounded-2 " + (successful ? "bg-success" : "bg-danger")
                                }>
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>

                </section>
            </div>
        </div>
    )
}

export default NoticiaEditar