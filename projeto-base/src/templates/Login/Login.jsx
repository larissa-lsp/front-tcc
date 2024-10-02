import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import grupo from '../../assets/images/grupo-imgLogin.png';
import logo from '../../assets/images/IconeLogo.png'
import UsuarioService from "../../services/UsuarioService";
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/home");
    }

    const backto = () => {
        navigate("/");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const editar = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        UsuarioService.signin(formData.email, formData.senha).then(
            () => {
                const userJson = localStorage.getItem("user");
                const user = JSON.parse(userJson || '{}');
                if (user.statusUsuario == 'ATIVO') {
                    navigate("/home");
                } else if (user.statusUsuario == 'TROCAR_SENHA') {
                    navigate(`/newpass/` + user.id);
                    //window.location.reload(); ordnael@email.com.br/
                }

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

        <section className="containerCad">
            <div className="content first-content">

                <div className="row">
                    <div className="main">

                        <img src={logo} alt="Ícone logo" />
                        <h2 className="title-1">Bem-vindo, colaborador!</h2> <br /> <br />

                        <form action="" className="form-login" onSubmit={handleSubmit}>
                
                            <label htmlFor="email" className="mb-1 fw-bold">Email:</label>
                            <input type="email" id="email" className="input border border-black" required maxLength="50"                               
                                name="email"
                                value={formData.email || ""}
                                onChange={handleChange} /> <br />


                            <label htmlFor="password" className="mb-1 fw-bold">Senha:</label>
                            <input type="password" id="password" className="input border border-black" required maxLength="50" 
                                name="senha"
                                value={formData.senha || ""}
                                onChange={handleChange} /> <br /><br />

                            <div className="containerBtn">
                                <p className="forgotPass">Esqueceu a senha?&nbsp;
                                    <Link to={'/forgotpass'}>Clique aqui.</Link>
                                </p>
                            </div>
                            <div className="text-center p-2 rounded-2">
                                {message && (
                                    <div className="fw-bold fs-5 text-danger">
                                        <span>{message}</span>
                                    </div>
                                )}
                            </div>

                            <div className="containerBtn">
                                <button className="btn" type="button" onClick={backto}>Cancelar</button>
                                <button className="btn" type="submit">Entrar</button>
                            </div>
                        </form>
                    </div>

                    <aside className="side">
                        <h2 className="title-2">É bom tê-lo conosco!</h2> <br />
                        <img src={grupo} alt="img-login" width="60%" /> <br />
                        <p className="description-primary">Responsabilidade com a verdade é o ponto crucial</p>
                    </aside>
                </div>
            </div>
        </section>

    )
}

export default Login