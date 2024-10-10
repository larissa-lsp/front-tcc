import '../CardNoticia/CardNoticia.css'
import foto from '../../assets/images/Tecnologia1.png'

function Card(props) {

    return (
        <div className="card">
            <img className="img-card" 
                src={props.foto ? 'data:image/jpeg;base64,' + props.foto : foto} alt="foto manchete" />
            
            <div className='conteudo'>
            <h5 className="title-card">{props.manchete}</h5>
                    <p className="text-card">{props.conteudo}</p>
                </div>
                <div className='d-flex justify-content-end mt-2 btn-ler'>
                    <button type='button' className="btn btn-primary btn-sm">Ler</button>
                </div>
            </div>
    );
}
export default Card