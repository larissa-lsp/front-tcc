import '../CardNoticia/CardNoticia.css'
import foto from '../../assets/images/Tecnologia1.png'

function Card(props) {

    return (
        <div className="card my-2 shadow-lg">
            <h5 className="card-header">{props.manchete}</h5>
            <div className="card-body">
                <div className='text-center my-2'>
                    <img className="card-title rounded-3 shadow" 
                         src={props.foto ? 'data:image/jpeg;base64,' + props.foto : foto} alt="foto manchete" />
                </div>
                <div>
                    <p className="card-text">{props.conteudo}</p>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <button type='button' className="btn btn-primary btn-sm">Ler</button>
                </div>
            </div>
        </div>
    );
}
export default Card