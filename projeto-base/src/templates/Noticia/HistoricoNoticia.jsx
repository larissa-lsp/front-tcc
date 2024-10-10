import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useState } from "react";
import { useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";

const HistoricoNoticia = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/historiconoticia')
    }

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        if(currentUser.nivelAcesso == 'COLABORADOR'){
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

    const editar = (id) => {
        navigate(`/noticiaeditar/` + id)
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/historiconoticia'}
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
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticias?.map((noticia) => (
                                    <tr className="" key={noticia.id}>
                                        <td>{noticia.id}</td>
                                        <td>{noticia.manchete}</td>
                                        <td>{noticia.palavrasChave}</td>
                                        <td>{noticia.statusNoticia}</td>
                                        <td>
                                            <button onClick={() => editar(noticia.id)}
                                                className="btn btn-sm btn-warning rounded">
                                                <i className="bi bi-envelope-open"> Ver Histórico</i>
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

export default HistoricoNoticia