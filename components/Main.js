import PropTypes from 'prop-types';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Blog</h2>

          {/* INICIO - ESTRUTURA POST */}
          <div className="poststyle"> {/* Utilizar className*/}
            <h3>O que é Tech Stack?</h3>
            <p>
              Conjunto de tecnologias que uma organização usa para criar um aplicativo Web ou móvel.
              É uma combinação de linguagens de programação, estruturas, bibliotecas, padrões, servidores,
              soluções de UI / UX, software e ferramentas usadas por seus desenvolvedores.
            </p>
            <p className="postby"> {/* Utilizar className*/}
                28/03/2020 - Lucas Martins - Adaptado de <a href="https://stackshare.io/stacks">stackshare.</a>
            </p>
          </div>
          {/* FIM - ESTRUTURA POST */}

          {/* INICIO - ESTRUTURA POST */}
          <div className="poststyle"> {/* Utilizar className*/}
            <h3>Seu Posto</h3>
            <p>
              Breve descrição sobre o tema
            </p>
            <p className="postby"> {/* Utilizar className*/}
                00/00/0000 - Seu nome - Fonte <a href="link">nome.</a>
            </p>
          </div>
          {/* FIM - ESTRUTURA POST */}

          

          {close}
        </article>

        <article id="techstack" className={`${this.props.article === 'techstack' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Tech Stack</h2>
          <div>
            <h3>Ferramentas utilizadas pelo nosso time! </h3>

            <img width="80px" src="../static/images/react.png" alt="ReactJS"></img>
            <img width="80px" src="../static/images/node.png" alt="NodeJS"></img>
            <img width="80px" src="../static/images/js.png" alt="JavaScript"></img>
            <img width="80px" src="../static/images/next.png" alt="Next.JS"></img>
            <img width="80px" src="../static/images/html.png" alt="Html5"></img>
            <img width="80px" src="../static/images/css.png" alt="Css"></img>
            <img width="80px" src="../static/images/aws.png" alr="Aws"></img>
            <img width="80px" src="../static/images/angular.png" alt="Angular"></img>
            <img width="80px" src="../static/images/ionic.png" alt="Ionic"></img>

            <p className="technames">ReactJS, NodeJS, JavaScript, NextJS, HTML, CSS, AWS, Angular, Ionic </p>
          </div>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Quem Somos</h2>

          <p>Me edita pra alterar o Quem Somos</p>

          {close}
        </article>

        <article id="projetos" className={`${this.props.article === 'projetos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
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