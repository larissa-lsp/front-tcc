import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";

const NoticiaEditar = () => {

    const objectValues = {
        id: null,
        manchete: "",
        conteudo: "",
        palavrasChave: "",
        dataEnvio: "",
        dataPublicacao: "",
        fonte: "",
    };

    const [noticia, setNoticia] = useState(objectValues);

    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        NoticiaService.findById(id).then(
            (response) => {
                const noticia = response.data;
                setNoticia(noticia);
                console.log(noticia);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

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

                        <div className="form-group col-md-12">
                            <label htmlFor="inputFoto" className="form-label">Foto:</label>
                            <input type="file" className="form-control-file" id="inputFoto" 
                            defaultValue={noticia.foto}/>
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