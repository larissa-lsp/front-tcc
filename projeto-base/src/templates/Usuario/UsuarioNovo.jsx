import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import { useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const UsuarioNovo = () => {

    // const [nivel, setNivel] = useState();
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
/*
    const onChangeType = (e) => {
        console.log(e.target.value)
        setNivel(e.target.value);
    }
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        UsuarioService.create(formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                /*window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })*/
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

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
                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        {!successful && (
                            <>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                                    <input  type="text" className="form-control" id="inputNome" 
                                            name="nome"
                                            value={formData.nome || ""}
                                            onChange={handleChange} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                                    <input  type="email" className="form-control" id="inputEmail" 
                                            name="email"
                                            value={formData.email || ""}
                                            onChange={handleChange}/>
                                </div>

                                <div className="col-md-2">
                                    <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
                                    <select id="inputAcesso" className="form-select" name="nivelAcesso"
                                        defaultValue={''} onChange={(e) => handleChange(e)}>

                                        <option value={''} disabled>
                                            Nível de Acesso...
                                        </option>
                                        <option value={"USER"}>USER</option>
                                        <option value={"ADMIN"}>ADMIN</option>
                                    </select>
                                </div>

                                <div className="col-12 my-2">
                                    <button type="submit" className="btn btn-primary">
                                        Gravar
                                    </button>
                                </div>
                            </>
                        )}
                        {message && (
                            <div className="m-1">
                                <div className={
                                    "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                                }>
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioNovo