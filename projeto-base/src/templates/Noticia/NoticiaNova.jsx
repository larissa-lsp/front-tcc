import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useState } from "react";
import { useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";
import UsuarioService from "../../services/UsuarioService";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";
import { useRef } from "react";


const NoticiaNova = () => {

    const _dbRecords = useRef(true);

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: ""
    };

    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();
    const [usuario, setUsuario] = useState(objectValues);
    const [file, setFile] = useState("");
    const [chosenImage, setChosenImage] = useState();

    const currentUser = UsuarioService.getCurrentUser();

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

    useEffect(() => {
        if (_dbRecords.current) {
            UsuarioService.findById(currentUser.id).then(
                (response) => {
                    const usuario = response.data;
                    setUsuario(usuario);
                }
            ).catch((error) => {
                console.log(error);
            })
        }
        return () => {
            _dbRecords.current = false;
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
            NoticiaService.createComFoto(file, formData, currentUser.id).then(
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
                <form className="row g-3" onSubmit={handleSubmit}>
                    {!successful && (
                        <>

                            <div className="form-group col-md-12">
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

                            <div className="form-group col-md-12">
                                <label htmlFor="inputFonte" className="col-form-label">Fonte:</label>
                                <input type="text" className="form-control" id="inputFonte" placeholder="" required
                                    name="fonte"
                                    value={formData.fonte || ""}
                                    onChange={handleChange} />
                            </div>

                            <div className="col-md-12">
                                <ImageUploaderModal
                                    setFile={setChosenFile}
                                    setImage={setImage} 
                                    chosenImage={chosenImage} />
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
        </div>
    )
}

export default NoticiaNova