import '../Noticia/NoticiaAberta.css'
import { useParams, useNavigate } from "react-router-dom";
import Header from "../HeaderNoticia/HeaderNoticia";
import Footer from "../Footer/Footer";
import { useRef, useState, useEffect } from "react";
import foto from '../../assets/images/Tecnologia1.png';
import NoticiaService from "../../services/NoticiaService";

const NoticiaAberta = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook para navegação
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
        usuario: {
            nome: ""
        }
    };

    const [noticia, setNoticia] = useState(initialObjectState);
    const [showModal, setShowModal] = useState(true); // Modal inicialmente visível

    useEffect(() => {
        // Impede rolagem ao abrir o modal
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        if (_dbRecords.current) {
            NoticiaService.findById(id)
                .then(response => {
                    const noticia = response.data;
                    setNoticia(noticia);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        return () => {
            _dbRecords.current = false;
            document.body.style.overflow = 'auto'; // Garante que a rolagem seja restaurada ao desmontar
        }
    }, [id, showModal]);

    const handleContinue = () => {
        // Redireciona para a página inicial (ou a rota desejada)
        navigate('/'); // Mude para a rota desejada, se necessário
    };

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

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Atenção!</h2>
                        <p>Este conteúdo é exclusivo do app mobile.</p>
                        <p>Baixe nosso aplicativo "Portal360" para ter acesso as notícias.</p>
                        <button className="btn btn-primary" onClick={handleContinue}>Início</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default NoticiaAberta;
