import { useState } from "react"
import MensagemService from "../../services/MensagemService"
import logo from '../../assets/images/IconeLogo.png';
import './FaleConosco.css'


const FaleConosco = () => {

    const objectValues = {
        email: "",
        emissor: "",
        texto: "",
        telefone: ""
    };
    const [mensagem, setMensagem] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        if (formData.emissor != undefined && formData.email != undefined && formData.texto != undefined) {
            MensagemService.create(formData).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }, (error) => {
                    const message = error.response.data.message;
                    setMessage(message);
                }
            )
        }
    }


    return (
        <div className="d-flex justify-content-center">
            <form className="form-fale row g-2 rounded-2 shadow" onSubmit={handleSubmit}>
                <p className="h3 text-center">Fale Conosco</p>
                {!successful && (
                    <>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control" id="inputEmissor" required
                                name="emissor"
                                value={formData.emissor || ""}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" required
                                name="email"
                                value={formData.email || ""}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputTelefone" className="form-label mb-1 fw-bold">Telefone *(opcional):</label>
                            <input type="text" className="form-control" id="inputTelefone"
                                name="telefone"
                                value={formData.telefone || ""}
                                onChange={handleChange} />
                        </div>
                        <div className="col-md-12 mb-1">
                            <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label>
                            <textarea rows={5} className="form-control" id="inputTexto" required
                                name="texto"
                                value={formData.texto || ""}
                                onChange={handleChange}  >
                            </textarea>
                        </div>
                        <div className="col-md-12 mb-1 d-flex flex-row-reverse">
                            <button className="btn btn-secondary mb-2">Enviar</button>
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
        </div>
    )
}

export default FaleConosco