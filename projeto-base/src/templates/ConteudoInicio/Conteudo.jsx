import Card from "../CardNoticia/CardNoticia"
import '../ConteudoInicio/Conteudo.css'
import foto from '../../assets/images/denied.png'
import { useEffect } from "react";
import NoticiaService from "../../services/NoticiaService";
import { useState } from "react";

function Conteudo() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        NoticiaService.findAll_Publicadas().then(
            (response) => {
                const noticias = response.data;
                setNoticias(noticias);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <main>
                {noticias?.map((noticia) => (
                    <Card key={noticia.id}
                    id={noticia.id}
                        foto={noticia.foto}
                        manchete={noticia.manchete}
                        conteudo={noticia.conteudo.substring(0, 100) + '...'} />
                ))}
            </main>
        </>
    );
}

export default Conteudo