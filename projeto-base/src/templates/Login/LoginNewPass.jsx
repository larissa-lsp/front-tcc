import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../../assets/images/IconeLogo.png';
import UsuarioService from "../../services/UsuarioService";
import './Login.css';

const LoginNewPass = () => {
    const objectValues = {
        id: null,
        nome: "",
        email: ""
    };

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(objectValues);

    const { id } = useParams();

    const goto = () => {
        navigate("/home");
    }

    const backto = () => {
        navigate("/");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();
    const [msgConfirm, setMsgConfirm] = useState();
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const confirmPass = (e) => {
        const value = e.target.value;
        if (formData.senha == value) {
            setMsgConfirm();
        } else {
            setMsgConfirm('As senhas não conferem!');
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        UsuarioService.alterarSenha(id, formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const respMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(respMessage);
            }

        );
    };

    return (
        <div className="container">
            <form action="" className="login-form" onSubmit={handleSubmit}>
                {!successful && (
                    <>
                        <div className="login-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="d-flex justify-content-center text-center px-2">
                            <p className="h5 fst-italic text-danger">O Usuário precisa Alterar a senha para ter acesso.</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                            <input type="email" id="email" readOnly className="form-control text-center fw-medium shadow border border-secondary-subtle"
                                name="email"
                                value={usuario.email || ""}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="senha" className="form-label mb-0 fw-bold">Nova Senha:</label>
                            <input type="password" id="senha" className="form-control text-center fw-medium shadow border border-secondary-subtle"
                                name="senha"
                                value={formData.senha || ""}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="newpass" className="form-label mb-0 fw-bold">Confirme a Senha:</label>
                            <input type="password" id="newpass" className="form-control text-center fw-medium shadow"
                                name="newpass"
                                onChange={confirmPass} />
                        </div>
                        <div className="text-center p-2 rounded-2">
                            {msgConfirm && (
                                <div className="fw-bold fs-5 text-danger">
                                    <span>{msgConfirm}</span>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-around my-3">
                            <button className="btn btn-warning fw-medium shadow" type="button"
                                onClick={backto}>Cancelar</button>
                            <button className="btn btn-success fw-medium shadow" type="submit">
                                Entrar</button>
                        </div>
                    </>
                )}
                {message && (
                    <div className="m-1 ">
                        <div className={
                            "text-center h5 fst-italic py-1 rounded-2 text-dark bg-opacity-25 " + (successful ? "bg-success" : "bg-danger")
                        }>
                            {message}
                            <Link className="btn btn-sm btn-warning fw-bold fst-italic my-3 p-2 shadow"
                                to={'/login'}>Acessar o sistema</Link>
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}

export default LoginNewPass;