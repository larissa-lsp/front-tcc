import '../NoticiaAberta/NoticiaAberta.css'
import { useParams, useNavigate } from "react-router-dom";
import Header from "../HeaderNoticia/HeaderNoticia";
import Footer from "../Footer/Footer";
import { useRef, useState, useEffect } from "react";
import foto from '../../assets/images/Tecnologia1.png';
import NoticiaService from "../../services/NoticiaService";

const NoticiaAberta = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Hook de navegação para redirecionamento
  const _dbRecords = useRef(true);

  const [noticia, setNoticia] = useState({
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
  });

  const [showAlert, setShowAlert] = useState(true);  // Controla a exibição da caixa de alerta

  // Impede rolagem e cliques fora da caixa quando ela está visível
  useEffect(() => {
    if (showAlert) {
      document.body.style.overflow = 'hidden';  // Travar rolagem
      document.body.style.pointerEvents = 'none';  // Desabilitar cliques fora da caixa
    } else {
      document.body.style.overflow = 'auto';  // Restaurar rolagem
      document.body.style.pointerEvents = 'auto';  // Restaurar cliques
    }

    return () => {
      document.body.style.overflow = 'auto';  // Restaurar rolagem ao desmontar o componente
      document.body.style.pointerEvents = 'auto';  // Restaurar cliques
    };
  }, [showAlert]);

  // Carregar a notícia ao montar o componente
  useEffect(() => {
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
    };
  }, [id]);

  // Função para redirecionar e fechar o alerta
  const handleRedirect = () => {
    setShowAlert(false);  // Fecha a caixa de alerta
    navigate('/');  // Redireciona para a página inicial
  };

  return (
    <div>
      <Header />

      {/* Caixa de alerta flutuante sobre o conteúdo */}
      {showAlert && (
        <div className="alert-wrapper">
          <div className="alert-box">
            <h2>Atenção!</h2>
            <p>Este conteúdo é exclusivo do app mobile.</p>
            <p>Baixe nosso aplicativo "Portal360" para ter acesso às notícias e comentá-las.</p>
            <button 
              className="btn btn-primary"
              onClick={handleRedirect}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff"
              }}
            >
              Voltar à Página Inicial
            </button>
          </div>
        </div>
      )}



      <section className="m-2 p-2 shadow-lg">
        <form className="row g-3 m-3 p-3 border shadow rounded-2">
          <h1 className="bold text-center">{noticia.manchete}</h1>
          <div className="m-2 text-center">
            <p className="text-end">Data de publicação: {noticia.dataPublicacao}</p>
            <p className="text-end">Nome do autor: {noticia.usuario.nome}</p>
            <img
              src={noticia.foto ? 'data:image/jpeg;base64,' + noticia.foto : foto}
              alt="img noticia"
              width="650px"
              height="650px"
            />
            <br />
            <p>{noticia.conteudo}</p>
            <p>Palavras-chave: {noticia.palavrasChave}</p>
            <p>Fontes: {noticia.fonte}</p>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default NoticiaAberta;
