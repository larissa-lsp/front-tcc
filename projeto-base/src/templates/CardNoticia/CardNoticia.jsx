import '../CardNoticia/CardNoticia.css'
import { useNavigate } from "react-router-dom";
import foto from '../../assets/images/Tecnologia1.png'
import { useEffect } from 'react';
import NoticiaService from '../../services/NoticiaService';

function Card(props) {

    const navigate = useNavigate();
   

    const getId = (id) => {
        navigate(`/noticiaaberta/${id}`)
    }

    return (
        <div className="card">
            <img className="img-card" 
                src={props.foto ? 'data:image/jpeg;base64,' + props.foto : foto} alt="foto manchete" />
            
            <div className='conteudo'>
            <h5 className="title-card">{props.manchete}</h5>
       
                    <p className="text-card">{props.conteudo}</p>
                </div>
                <div className='d-flex justify-content-end mt-2 btn-ler'>
                    <button type='button' className="btn btn-primary btn-sm" onClick={() => getId(props.id)}>Ler</button>
                </div>
            </div>
    );
}
export default Card