import '../CardNoticia/CardNoticia.css'
import fotoManchete from '../../assets/images/Tecnologia1.png'

function Card(props) {

    return (
        <div className="card">
            <img className="img-card" src={fotoManchete} alt="foto manchete" />
            <div className="conteudo">
            <h2 className="title-card">{props.manchete}</h2>
            <p className="text-card">{props.texto}</p>
            </div>
        </div>
    );
}
export default Card