import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const NoticiasLista = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/noticiaeditar')
    }

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        NoticiaService.findAll().then(
            (response) => {
                const noticias = response.data;
                setNoticias(noticias);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const editar = (id) => {
        navigate(`/noticiaeditar/` + id)
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
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Manchete</th>
                                    <th scope="col">Palavras-chave</th>
                                    <th scope="col">Data envio</th>
                                    <th scope="col">Data publicação</th>
                                    <th scope="col">usuario_id</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticias?.map((noticia) => (
                                    <tr className="" key={noticia.id}>
                                        <td>{noticia.id}</td>
                                        <td>{noticia.manchete}</td>
                                        <td>{noticia.conteudo}</td>
                                        <td>{noticia.palavrasChave}</td>
                                        {/* <td>{noticia.dataEnvio}</td> */}
                                        <td>{noticia.dataPublicacao}</td>
                                        <td>{noticia.fonte}</td>
                                        {/* <td>{noticia.usuario_id}</td> */}
                                        <td>
                                            <button onClick={() => editar(noticia.id)}
                                                className="btn btn-sm btn-warning rounded">
                                                <i className="bi bi-envelope-open"> Abrir</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NoticiasLista