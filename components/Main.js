import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
        
        <div>
          <h3>O que é Tech Stack?</h3>
            <p>
              Conjunto de tecnologias que uma organização usa para criar um aplicativo Web ou móvel.
              É uma combinação de linguagens de programação, estruturas, bibliotecas, padrões, servidores, 
              soluções de UI / UX, software e ferramentas usadas por seus desenvolvedores. 
            </p>
            <p>
                28/03/2020 - Lucas Martins - Adaptado de <a href="https://stackshare.io/stacks">stackshare.</a>  
            </p>
        </div>

        <div>
          <h3>Exemplo</h3>
            <p>
              Breve descrição sobre o tema apresentado
            </p>
            <p>
                01/01/2010 - Autor - Fonte <a href="Link">Nome da fonte.</a>  
            </p>
        </div>
          

          {close}
        </article>

        <article id="techstack" className={`${this.props.article === 'techstack' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tech Stack</h2>
          

         

         {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Quem Somos</h2>
        
          <p>Me edita pra alterar o Quem Somos</p>

         {close}
        </article>

        <article id="projetos" className={`${this.props.article === 'projetos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projetos Pessoais</h2>
        
          <p>Me edita pra alterar o Projetos Pessoais</p>

          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main