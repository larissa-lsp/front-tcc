import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import perfil from '../../assets/images/perfil_blz.jpg'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import './Usuario.css';
import LogoTitulo from '../../assets/images/LogoTitulo.png'


const UsuarioPerfil = () => {

    const navigate = useNavigate();

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


    const goToAlterarSenha = () => {
        navigate(`/usuarioalterarsenha/` + id);
    }

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
                    goto={'/home'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <section className="m-1 p-1 shadow-lg">
                    <form className="form-perfil row g-2 rounded-2 shadow">
                        <div className="col-md-12">
                            <img src={usuario.foto ? usuario.foto : perfil} alt="..." />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control" id="inputNome"
                                defaultValue={usuario.nome} />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control text-center" id="inputEmail4" readOnly
                                defaultValue={usuario.email} />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="inputnivelAcesso" className="form-label mb-1 fw-bold">Nível de Acesso:</label>
                            <input type="text" className="form-control text-center" id="inputnivelAcesso" readOnly
                                defaultValue={usuario.nivelAcesso} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control text-center" id="inputStatus" readOnly
                                defaultValue={usuario.statusUsuario} />
                        </div>


                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary shadow">
                                Gravar Alterações
                            </button>

                            <button type="button" onClick={goToAlterarSenha}
                                className="btn btn-danger shadow">
                                Alterar a Senha
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioPerfil