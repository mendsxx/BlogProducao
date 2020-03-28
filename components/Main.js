import PropTypes from 'prop-types';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
        
        <div id="post-01">
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
         

          {close}
        </article>

        <article id="techstack" className={`${this.props.article === 'techstack' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tech Stack</h2>
        <div>
          <h3>Ferramentas utilizadas pelo nosso time! </h3>   

            <img width="105px" src="../static/images/js.png"      alt="JavaScript"></img>

            <img width="105px" src="../static/images/next.png"    alt="Next.JS"></img>

            <img width="105px" src="../static/images/html.png"    alt="Html5"></img>

            <img width="105px" src="../static/images/css.png"     alt="Css"></img>

            <img width="105px" src="../static/images/aws.png"     alr="Aws"></img>

            <img width="105px" src="../static/images/angular.png" alt="Angular"></img>

            <img width="105px" src="../static/images/ionic.png"   alt="Ionic"></img>  
        
        </div>          

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