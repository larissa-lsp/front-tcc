import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/IconeLogo.png';
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import { useRef, useState, useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";
import UsuarioService from "../../services/UsuarioService";

const NoticiaAberta = () => {

    const { id } = useParams();
    const _dbRecords = useRef(true);

    const initialObjectState = {
        id: null,
        manchete: "",
        conteudo: "",
        palavrasChave: "",
        dataEnvio: "",
        dataPublicacao: "",
        fonte: "",
        foto: null,
        statusNoticia: ""

    };

    const [noticia, setNoticia] = useState(initialObjectState);

    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);

    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const [chosenImage, setChosenImage] = useState();

    const [visible, setVisible] = useState(false);
    const currentUser = UsuarioService.getCurrentUser();

    useEffect(() => {
        if (currentUser.nivelAcesso == 'ADMIN') {
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


    const setChosenFile = (dataFile) => {
        setFile(dataFile);
    }

    const setImage = (dataImage) => {
        setChosenImage(dataImage);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNoticia(noticia => ({ ...noticia, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        NoticiaService.alterar(file, id, noticia).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                console.log(response.data.message)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        )
    }

    const publicar = (e) => {
        e.preventDefault();
        setSuccessful(false);

        NoticiaService.publicar(id).then(
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

    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div className="p-3 w-100">
                    <Header
                        goto={'/noticia'}
                        title={LogoTitulo}
                        logo={logo}
                    />
                    <section className="m-2 p-2 shadow-lg">
                    
                    </section>
                </div></div>
        </>


    )
}

export default NoticiaAberta