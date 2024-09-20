import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";
import UsuarioService from "../../services/UsuarioService";

const NoticiaEditar = () => {

    const { id } = useParams();

    const initialObjectState = {
        id: null,
        manchete: "",
        conteudo: "",
        palavrasChave: "",
        dataEnvio: "",
        dataPublicacao: "",
        fonte: "",
        foto: null,

    };

    const [noticia, setNoticia] = useState(objectValues);
    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const [chosenImage, setChosenImage] = useState();
    const currentUser = UsuarioService.getCurrentUser();

    useEffect(() => {
        NoticiaService.findById(id).then(
            (response) => {
                const noticia = response.data;
                setNoticia(noticia);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const setChosenFile = (dataFile) => {
        setFile(dataFile);
    }

    const setImage = (dataImage) => {
        setChosenImage(dataImage);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = () => {
        setMessage("");
        setSuccessful(false);

        NoticiaService.createComFoto(file, formData, currentUser.id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                /*window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })*/
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
                    <form className="row g-3 m-3 p-3 border shadow rounded-2" onSubmit={handleSubmit} >
                        {!successful && (
                            <>

                                <div className="col-md-1">
                                    <label htmlFor="inputId" className="form-label">ID</label>
                                    <input type="text" className="form-control" id="inputId" readOnly
                                        defaultValue={noticia.id} />
                                </div>

                                <div className="col-md-11">
                                    <label htmlFor="inputManchete" className="form-label">Manchete:</label>
                                    <input type="text" className="form-control" id="inputManchete"
                                        defaultValue={noticia.manchete} />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputConteudo" className="form-label">Conteúdo:</label>
                                    <textarea rows={20} className="form-control" id="inputConteudo"
                                        defaultValue={noticia.conteudo} >
                                    </textarea>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputPalavrasChave" className="form-label">Palavras-chave:</label>
                                    <textarea rows={2} className="form-control" id="inputPalavrasChave"
                                        defaultValue={noticia.palavrasChave} >
                                    </textarea>
                                </div>

                                {/*
                                <div className="col-md-6">
                                    <label htmlFor="inputDataEnvio" className="form-label">Data de envio</label>
                                    <input type="date" className="form-control" id="inputDataEnvio" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputDataPublicacao" className="form-label">Data de publicação</label>
                                    <input type="date" className="form-control" id="inputDataPublicacao" />
                                </div>
                                */}

                                <div className="form-group col-md-9">
                                    <label htmlFor="inputFonte" className="form-label">Fonte:</label>
                                    <input type="text" className="form-control" id="inputFonte"
                                        defaultValue={noticia.fonte} />
                                </div>

                                <div className="col-md-12 text-center">
                                    <img className="shadow-lg" src={noticia.foto ? 'data:image/jpeg;base64,' + noticia.foto : logo} alt="..." />
                                </div>

                                <div className="col-md-12">
                                    <ImageUploaderModal
                                        setFile={setChosenFile}
                                        setImage={setImage}
                                        chosenImage={chosenImage} />
                                </div>


                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">
                                        Gravar
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