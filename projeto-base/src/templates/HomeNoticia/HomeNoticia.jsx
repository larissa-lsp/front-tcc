import React from 'react'
import Footer from "../Footer/Footer"
import Card from '../../templates/CardNoticia/CardNoticia'
import Header from '../HeaderNoticia/HeaderNoticia'

const HomeNoticia = () => {
    return (
        <div>
                <Header />

                <Card manchete="Manchete" texto="
                Texto da manchete mt legal 
                pipipopopopipipopopo
                pipipopopopipipopopo
                pipipopopopipipopopo
                pipipopopopipipopopo
                pipipopopopipipopopo"/>

            <Footer />
        </div>
            
    );
};

export default HomeNoticia