import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import MensagemService from "../../services/MensagemService"

const Mensagem = () => {
    const navigate = useNavigate();
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        MensagemService.findAll().then(
            (response) => {
                const mensagens = response.data;
                setMensagens(mensagens);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const lerMensagem = (id) => {
        navigate(`/mensagemler/` + id)
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={'Mensagem'}
                    logo={logo}
                />
                <section className="p-2 m-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Emissor</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensagens?.map((mensagem) => (
                                    <tr key={mensagem.id}>
                                        <td scope="row">{mensagem.id}</td>
                                        <td>{mensagem.dataMensagem}</td>
                                        <td>{mensagem.emissorMensagem}</td>
                                        <td>{mensagem.email}</td>
                                        <td>{mensagem.statusMensagem}</td>
                                        <td>
                                            <button type="button" onClick={() => lerMensagem(mensagem.id)}
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

export default Mensagem