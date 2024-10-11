import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header"
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import logo from '../../assets/images/IconeLogo.png';
import imgSuccess from "../../assets/images/verifica.png"

const SuccessPageAdmin = () => {


    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
        },
        message: {
            fontSize: '24px',
            color: '#2196F3',
            marginTop: '20px',
        },
    };

    return (
        <div>
            <div className="p-3 w-100">
                <Header
                    goto={'/noticia'}
                    title={LogoTitulo}
                    logo={logo}
                />
                <div style={styles.container}>
                    <div className="text-center">
                        <img src={imgSuccess} alt="img-lista" />
                    </div>
                    <div style={styles.message}>Efetuado com sucesso</div><br />

                </div>
            </div>
        </div>



    );
};

export default SuccessPageAdmin;