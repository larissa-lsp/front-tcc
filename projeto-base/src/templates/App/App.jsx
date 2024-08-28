import { useState } from 'react'
import { Link } from 'react-router-dom'
import FaleConosco from '../Mensagem/FaleConosco'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg menu">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portal360</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notícias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quem Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Junte-se a Nós</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/faleconosco'}>Fale Conosco</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     <FaleConosco />

      <footer>
        <Link to={'/login'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
      </footer>
    </div>
  )
}

export default App
