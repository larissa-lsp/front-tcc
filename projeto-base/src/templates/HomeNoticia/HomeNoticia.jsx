import React from 'react'
import Footer from "../Footer/Footer"
import Conteudo from '../ConteudoInicio/Conteudo'
import Header from '../HeaderNoticia/HeaderNoticia'

const HomeNoticia = () => {
    return (
        <div>
                <Header />
            
            <main>
                <Conteudo />
            </main>

            <Footer />
        </div>
            
    );
};

export default HomeNoticia