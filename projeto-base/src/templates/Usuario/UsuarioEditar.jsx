import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const UsuarioEditar = () => {

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: ""
    };

    const [usuario, setUsuario] = useState(objectValues);

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
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data;
                setUsuario(usuario);
                console.log(usuario);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);


    /*
        A propriedade 'value' para um campo de formulário sem um manipulador 'onChange', 
        faz com que o campo seja renderizado como somente de leitura. 
        Se o campo deve ser mutável, deve ser utilizada a propriedade 'defaultValue'. 
        Caso contrário, deve ser definida 'onChange' ou 'readOnly'.
    */
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-2 m-5 p-2 rounded-2 shadow">
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control border border-black" id="inputID" readOnly
                                defaultValue={usuario.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control border border-black" id="inputNome"
                                defaultValue={usuario.nome} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control border border-black" id="inputEmail4"
                                defaultValue={usuario.email} />
                        </div>

                        <div className="col-md-4 my-3">
                            <label htmlFor="inputData" className="form-label mb-1 fw-bold">Data de Cadastro:</label>
                            <input type="text" className="form-control border border-black" id="inputData" readOnly
                                defaultValue={usuario.dataCadastro} />
                        </div>
                        <div className="col-md-4 my-3">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control border border-black" id="inputStatus" readOnly
                                defaultValue={usuario.statusUsuario} />
                        </div>
                        <div className="col-md-4 my-3">
                            <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
                            <select id="inputAcesso" className="form-select border border-black" readOnly
                                value={usuario.nivelAcesso} >
                                <option value={'USER'}>USER</option>
                                <option value={'COLABORADOR'}>COLABORADOR</option>
                                <option value={'ADMIN'}>ADMIN</option>
                            </select>
                        </div>

                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-warning">
                                Reativar / Resetar a Senha
                            </button>
                            <button type="button" className="btn btn-danger">
                                Inativar Conta
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioEditar