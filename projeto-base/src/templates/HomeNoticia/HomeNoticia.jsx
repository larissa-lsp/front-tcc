import React from 'react'
import { Link } from 'react-router-dom'
import TecnologiaImage from '../../assets/images/Tecnologia1.png'
import TrabalhandoImage from '../../assets/images/trabalhando.png'
import InstagramIcon from '../../assets/images/instagram.png'
import LinkedInIcon from '../../assets/images/linkedin.png'
import FacebookIcon from '../../assets/images/facebook.png'

const HomeNoticia = () => {
    return (
        <div>
            <main className="row-home">
                <section className="main-home">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div className="container" key={index}>
                            <div className="noticia-container">
                                <img className="img-noticia" src={TecnologiaImage} alt="" />
                                <div className="txt-noticia">
                                    <h1 className="title">Tema notícia</h1>
                                    <p>
                                        Lorem ipsum dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum
                                        dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum
                                        dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum
                                        dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum dnsfhusadbildhsLorem ipsum
                                        dnsfhusadbildhs
                                    </p>
                                </div>
                            </div>
                            <br /><br /><br />
                        </div>
                    ))}
                </section>
            </main>

            <hr />

            {/* Sessão de sobre nós */}
            <section className="sobre-nos-container" id="sobre-nos">
                <img src={TrabalhandoImage} alt="Pessoas trabalhando" className="img-sobreNos" />
                <div className="txt-sobreNos">
                    <h1 className="title">Quem nós somos?</h1>
                    <p>
                        No mundo acelerado da tecnologia, estar bem informado é fundamental. É por isso que estamos aqui para
                        oferecer a você uma fonte confiável de notícias no campo da tecnologia da informação. Somos um
                        aplicativo dedicado a fornecer as informações mais precisas e relevantes sobre TI, para que você esteja
                        sempre atualizado com as últimas tendências, avanços e acontecimentos no mundo da tecnologia. <br /><br />
                        O que nos torna diferentes? A resposta é simples: nosso compromisso em abordar um problema comum que
                        muitas vezes passa despercebido em grandes empresas de notícias. Vemos a importância das notícias que,
                        por diversos motivos, não recebem a atenção que merecem. É por isso que nos dedicamos a trazer à tona
                        informações importantes que podem passar despercebidas em outros lugares. Acreditamos que todos têm o
                        direito de acessar notícias de qualidade, independentemente de quaisquer barreiras. <br /><br />
                        Estamos aqui para trazer mais praticidade ao seu dia a dia, proporcionando um atendimento maior ao
                        público. Nossa missão é abranger uma variedade de tópicos e perspectivas, tornando nossa plataforma
                        acessível a um público diversificado. Quer você seja um entusiasta de tecnologia, um profissional de TI
                        ou apenas alguém que deseja se manter informado, você encontrará algo para você em nosso portal de
                        notícias.
                    </p>
                </div>
            </section>

            {/* Rodapé da página */}
            <footer className="footer">
                <div className="footer-direitos">
                    <p>Todos direitos reservados Portal360 Ltda.</p>
                </div>

                <Link to={'/login'}
                    className='btn btn-sm btn-warning'>
                    Acesso Restrito
                </Link>

                <div className="redes-sociais">
                    <ul>
                        <h2>Redes sociais</h2>
                        <li><img src={InstagramIcon} alt="Instagram" width="5%" /> Instagram</li>
                        <li><img src={LinkedInIcon} alt="Linkedin" width="5%" /> Linkedin</li>
                        <li><img src={FacebookIcon} alt="Facebook" width="5%" /> Facebook</li>
                    </ul>
                </div>
                <div className="github">
                    <ul>
                        <h2>GitHub</h2>
                        <li>Anna L.</li>
                        <li>Eduardo L.</li>
                        <li>Gustavo O.</li>
                        <li>Kimberli C.</li>
                        <li>Larissa S.</li>
                        <li>Maria E.</li>
                        <li>Vitoria J.</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default HomeNoticia