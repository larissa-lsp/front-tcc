import { useParams } from "react-router-dom"
import Header from "../HeaderNoticia/HeaderNoticia"
import Footer from "../Footer/Footer"
import { useRef, useState, useEffect } from "react";
import foto from '../../assets/images/Tecnologia1.png'
import NoticiaService from "../../services/NoticiaService";

const NoticiaAberta = () => {

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
        statusNoticia: "",
        usuario:{
            nome:""
        }

    };

    const [noticia, setNoticia] = useState(initialObjectState);

    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});

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


    return (
        <div>
            <Header />
            <section className="m-2 p-2 shadow-lg">
                <form className="row g-3 m-3 p-3 border shadow rounded-2">
                    <>  
                    <h1 className="bold text-center">{noticia.manchete}</h1>
                    <div className="m-2 text-center">
                        
                        <p className="text-end">Data de publicação: {noticia.dataPublicacao}</p>
                        <p className="text-end">Nome do autor: {noticia.usuario.nome}</p>
                        <img src={noticia.foto ? 'data:image/jpeg;base64,' + noticia.foto : foto} alt="img noticia" width="650px" height="650px"/> <br />
                        
                        <p className="">{noticia.conteudo}</p>
                        <p className="">Palavras-chave: {noticia.palavrasChave}</p>
                        <p className="">Fontes: {noticia.fonte}</p>
                    
                    </div>
                    </>

                </form>
            </section>

            <Footer />
        </div>


    )
}

export default NoticiaAberta