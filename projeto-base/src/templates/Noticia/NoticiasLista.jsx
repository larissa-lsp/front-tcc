import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useRef, useState, useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";

const NoticiasLista = () => {

    const navigate = useNavigate();
    const _dbRecords = useRef(true);

    const [noticias, setNoticias] = useState([]);

    const getId = (id) => {
        navigate(`/noticiaeditar/${id}`)
    }

    useEffect(() => {
        if (_dbRecords.current) {
            NoticiaService.findAll().then(
                (response) => {
                    const noticias = response.data;
                    setNoticias(noticias);
                }
            ).catch((error) => {
                setNoticias([]);
                console.log(error);
            })
        }
        return () => {
            _dbRecords.current = false;
        }
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

                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"> ID </th>
                                    <th scope="col">Manchete</th>
                                    <th scope="col">Palavras-chave</th>
                                    <th scope="col">Data Envio</th>
                                    <th scope="col">Data Publicação</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticias?.map((noticia) => (
                                    <tr key={noticia.id}>
                                        <td scope="row">{noticia.id}</td>
                                        <td>{noticia.manchete}</td>
                                        <td>{noticia.palavrasChave}</td>
                                        <td>{noticia.dataEnvio}</td>
                                        <td>{noticia.dataPublicacao}</td>
                                        <td>{noticia.statusNoticia}</td>
                                        <td>
                                            <button type="button" onClick={() => getId(noticia.id)}
                                                className="btn btn-sm btn-warning">
                                                <i className="bi bi-envelope-open me-2"></i>Abrir
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