import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import UsuarioService from "../../services/UsuarioService"
import AcessoNegado from "./AcessoNegado"
import { useState } from "react"
import ImageUploader from "../../components/ImageUploader/ImageUploader"
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal"
import LogoTitulo from '../../assets/images/LogoTitulo.png'

const Home = () => {

    const currentUser = UsuarioService.getCurrentUser();
    const [dataFile, setDataFile] = useState();
    const [chosenImage, setChosenImage] = useState();

    const setFile = (dataFile) => {
        setDataFile(dataFile);
    }

    const setImage = (dataImage) => {
        setChosenImage(dataImage);
    }

    const ver = () => {
        console.log(dataFile);
    };

    return (
        <>
            {currentUser ?
                <div className="d-flex">
                    <Sidebar />
                    <div className="p-3 w-100">
                        <Header
                            goto={'/home'}
                            title={LogoTitulo}
                            logo={logo}
                        />
                        <h2 className="user-nome fw-bold fst-italic">Bem-vindo(a), {currentUser.nome}!</h2>
                        {/*
                            <ImageUploader
                                setFile={setFile} />
                        */}
                        <ImageUploaderModal
                            setFile={setFile}
                            setImage={setImage}
                            chosenImage={chosenImage} />
                    </div>
                </div> :
                <AcessoNegado />
            }
        </>
    )
}

export default Home