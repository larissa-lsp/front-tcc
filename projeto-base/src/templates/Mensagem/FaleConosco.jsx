import { useState } from "react"
import MensagemService from "../../services/MensagemService"
import logo from '../../assets/images/IconeLogo.png';
import './FaleConosco.css'
import faleconos from '../../assets/images/faleConoscoIMG.png'


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
        <>
            <div className="maior">
                <div className="forms">
                    <form className="form-fale row g-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        <p className="title-1">Fale Conosco</p>
                        {!successful && (
                            <>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Nome:</label><br />
                                    <input placeholder="Insira seu nome:" type="text" className="input"  id="inputEmissor" required
                                        name="emissor"
                                        value={formData.emissor || ""}
                                        onChange={handleChange} /><br /><br />
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label  htmlFor="inputTelefone" className="form-label mb-1 fw-bold">Telefone *(opcional):</label><br />
                                    <input placeholder=" Insira sua senha" type="text" className="input"  id="inputTelefone"
                                        name="telefone"
                                        value={formData.telefone || ""}
                                        onChange={handleChange} /><br /><br />
                                </div>
                                <div className="col-md-12 mb-1">
                                    <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label><br />
                                    <textarea placeholder=" Insira sua mensagem" rows={5} className="input"      id="inputTexto" required
                                        name="texto"
                                        value={formData.texto || ""}
                                        onChange={handleChange}  ><br /><br />
                                    </textarea>
                                </div>

                                <button className="mensagem-btn">Enviar</button>
                            </>
                        )}
                        {/* {{message && (
                    <div className="m-1">
                        <div className={
                            "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                        }>
                            {message}
                        </div>
                    </div>
                    )}*/}
                    </form>

                </div>
                <div className="imagem">
                    <img className="img-fale" src={faleconos} alt="" />
                    <h2 className="mens">
                    Envie para nós o seu problema e</h2>
                    <h2 className="mens"> entraremos em contato com você.
                    </h2>

                </div>

            </div>
        </>
    )
}

export default FaleConosco