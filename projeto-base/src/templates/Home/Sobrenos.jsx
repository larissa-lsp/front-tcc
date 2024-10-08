
import logo from '../../assets/images/home.png'
import LogoTitulo from '../../assets/images/LogoTitulo.png'
import Header from "../../components/Header/Header"
import './Sobrenos.css'
import metas from '../../assets/images/metas.png'
import mudando from '../../assets/images/estamos-mudando1.png'
import somos from '../../assets/images/mas-quem-somo-nos-removebg.png'


const Sobrenos = () => {
  return (
    <>
      <Header
        goto={'/'}
        title={LogoTitulo}
        logo={logo}
      />

<div className="fundo-color">
<div class="topic">
        <img src={mudando} alt="Descrição da imagem 1" class="topic-image" />
        <div>
          <h1 class="txtSobre">Estamos mudando a forma <br /> De como as pessoas <br /> veem as notícias</h1><br /><br />
          <h5 class="conteudo">
            No mundo dinâmico e em constante evolução da tecnologia, a maneira como
            consumimos informações está passando por uma transformação significativa.
            No Portal360, estamos na vanguarda dessa revolução, redefinindo a forma
            como as pessoas veem as notícias. Desde a nossa fundação, o Portal360 tem se
            dedicado a fornecer notícias digitais de alta qualidade, com um foco especial
            no mercado tecnológico. Nossa missão é clara: tornar a informação acessível,
            relevante e envolvente para todos os nossos leitores.
          </h5>
        </div>
      </div><br /><br />

      <div class="topic">
        <div>
          <h1 class="txtSobre">Mas quem somos nós?</h1><br /><br />
          <h5 class="conteudo">
            O Portal360 nasceu da visão de um grupo de entusiastas da tecnologia que
            acreditavam que as notícias deveriam ser mais do que apenas informações –
            elas deveriam ser uma experiência. Com essa ideia em mente, lançamos nossa
            plataforma, oferecendo uma cobertura abrangente e detalhada das últimas
            inovações, tendências e desenvolvimentos no mundo da tecnologia. Ao longo
            dos anos, crescemos e evoluímos, sempre mantendo nosso compromisso com a
            qualidade e a precisão. Hoje, somos um dos principais portais de notícias
            digitais focados no mercado tecnológico, com uma equipe dedicada de jornalistas
            e especialistas que trabalham incansavelmente para trazer as melhores informações.
          </h5>
        </div>
        <img src={somos} alt="Descrição da imagem 2" class="topic-image" />
      </div><br /><br />

      <div class="topic">
        <img src={metas} alt="Descrição da imagem 2" class="topic-image" />
        <div>
          <h1 class="txtSobre">O futuro das Notícias</h1><br /><br />
          <h5 class="conteudo">
            No Portal360, acreditamos que o futuro das notícias está na interatividade e
            na personalização. Estamos constantemente explorando novas maneiras de envolver
            nossos leitores, desde a integração de tecnologias de realidade aumentada até a
            criação de conteúdos multimídia interativos. Nosso objetivo é garantir que
            cada visita ao nosso portal seja uma experiência única e enriquecedora. Estamos
            mudando a forma de como as pessoas veem as notícias, e convidamos você a
            fazer parte dessa jornada conosco. No Portal360, o futuro da informação já começou.

          </h5>
        </div>
      </div><br /><br />


</div>
      

    </>
  )
}




export default Sobrenos



