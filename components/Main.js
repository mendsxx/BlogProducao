import PropTypes from 'prop-types';

import React, { Component } from "react"
import Disqus from "disqus-react"

class Main extends React.Component {
  render() {

    const disqusShortname = "devarena-tech" //found in your Disqus.com dashboard
      const disqusConfig = {
        url: "devarena.tech", //this.props.pageUrl
        identifier: "article-id", //this.props.uniqueId
        title: "Dev Arena" //this.props.title
      }

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Blog</h2>

         

          {/* INICIO - ESTRUTURA POST */}
          <div className="poststyle"> {/* Utilizar className*/}
            <h3>A importancia do Quem Somos</h3>
            <p>
              Quem Somos tem o intuito de fazer sua apresentação pessoal ou do seu negócio, mostrando para os visualizadores da página um pouco sobre sua vida ou de sua empresa, para que conheça um pouco da sua História.
            </p>
            <p className="postby"> {/* Utilizar className*/}
                29/03/2020 - Daniel Moreira - Inspirado  <a href="https://www.ladoaladopelavida.org.br/historia">Quem Somos - Lado a Lado pela Vida.</a>
            </p>
          </div>
          {/* FIM - ESTRUTURA POST */}

          {/* INICIO - ESTRUTURA POST */}
          <div className="poststyle"> {/* Utilizar className*/}
            <h3> O QUE SÃO PROJETOS PESSOAIS?</h3>
            <p>
              É um processo ou objetivo que gere satisfação e motivação a um profissional fora de seu trabalho. Pode ser a execução de uma nova ideia, um hobby ou uma viagem, etc.
              Um projeto pessoal ajuda a testar ideias, a criar caminhos e a realizar novos feitos! gera satisfação e motivação a um profissional fora de seu trabalho.

            </p>
            <p className="postby"> {/* Utilizar className*/}
                29/03/2020 - Felipe Lonni - Adaptado de <a href="https://anajacobs.com.br/blog/2013/09/criando-um-projeto-pessoal/">anajacobs.</a>
            </p>
          </div>
          {/* FIM - ESTRUTURA POST */}

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

          {close}
        </article>

        <article id="techstack" className={`${this.props.article === 'techstack' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Tech Stack</h2>
          <div>
            <h3>Ferramentas utilizadas pelo nosso time! </h3>

            <a className="linkperfil" href="https://pt-br.reactjs.org/">
              <img width="80px" src="../static/images/react.png"></img>
            </a>
            <a className="linkperfil" href="https://nodejs.org/en/">
              <img width="80px" src="../static/images/node.png"></img>
            </a>
            <a className="linkperfil" href="https://www.javascript.com/">
              <img width="80px" src="../static/images/js.png"></img>
            </a>
            <a className="linkperfil" href="https://nextjs.org/">
              <img width="80px" src="../static/images/next.png"></img>
            </a>
            <a className="linkperfil" href="https://www.google.com/search?sxsrf=ALeKk02l-58tQcNPIiFQW6zrOhRzgcAlqg:1585432291717&ei=48Z_Xo6VK6PD5OUPna6N4Ak&q=html&oq=html&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgQIABAKUK4JWPMMYNoQaABwAngAgAGIAYgBjAKSAQMwLjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjOksDEk77oAhWjIbkGHR1XA5wQ4dUDCAs&uact=5">
              <img width="80px" src="../static/images/html.png"></img>
            </a>
            <a className="linkperfil" href="https://www.google.com/search?q=CSS&oq=CSS&aqs=chrome..69i57j0l4j69i60l2j69i61.446j0j7&sourceid=chrome&ie=UTF-8">
              <img width="80px" src="../static/images/css.png"></img>
            </a>
            <a className="linkperfil" href="https://aws.amazon.com/pt/">
              <img width="80px" src="../static/images/aws.png"></img>
            </a>
            <a className="linkperfil" href="https://angular.io/">
              <img width="80px" src="../static/images/angular.png"></img>
            </a>
            <a className="linkperfil" href="https://ionicframework.com/">
              <img width="80px" src="../static/images/ionic.png"></img>
            </a>
          </div>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Quem Somos</h2>
          <div className="poststyle">

            <h2>Lucas Martins </h2>
            <img width="310px" src="/static/images/lucas.jpg" alt="" />
            <p>Lucas Martins, Londrinense, 20 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento Web e Mobile utilizando ferramentas como: NodeJS, JavaScript, NextJS, ReactJS, Angular, Ionic, HTML, CSS, entre outras. Trabalha na BRID Soluções na área de Qualidade de Dados como analista, desenvolvendo  em ferramentas QlikView, QlikSense,
            Power BI e Alteryx.
          <div>
                <a className="linkperfil" href="https://www.linkedin.com/in/lucas-m-martins/">
                  <img className="logoQ" src="../static/images/linke.png" alt="linke"></img>
                </a>
                <a className="linkperfil" href="https://github.com/mendsxx">
                  <img className="logoQ" src="../static/images/logo-github.png" alt="github"></img>
                </a>
              </div>
            </p>
          </div>

          <div className="poststyle">
            <h2>Daniel Moreira</h2>
            <img width="310px" src="/static/images/daniel.jpg" alt="" />
            <p> Daniel Moreira, Londrinense, 18 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento Web  utilizando ferramentas como: Angular, NextJS, ReactJS, NodeJS, HTML, entre outras. Trabalha na JMTI Tecnologia e Soluções e na SDR Viagens.
            <div>
                <a className="linkperfil" href="https://www.linkedin.com/in/daniel-moreira-68177315a/">
                  <img className="logoQ" src="../static/images/linke.png" alt="linke"></img>
                </a>
                <a className="linkperfil" href="https://github.com/danielmoreiraunifil">
                  <img className="logoQ" src="../static/images/logo-github.png" alt="github"></img>
                </a>
              </div>
            </p>
          </div>

          <div className="poststyle">
            <h2>Felipe Lonni</h2>
            <img width="310px" src="/static/images/felipe.jpg" alt="" />
            <p>
              Felipe Lonni, Londrinense, 19 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento utilizando ferramentas como: Java, NextJS, HTML, entre outras. Trabalha no Sine de Cambé.
              <div>
                <a className="linkperfil" href="https://www.linkedin.com/in/felipe-lonni-127676181">
                  <img className="logoQ" src="../static/images/linke.png" alt="linke"></img>
                </a>
                <a className="linkperfil" href="https://github.com/Felps13">
                  <img className="logoQ" src="../static/images/logo-github.png" alt="github"></img>
                </a>
              </div>
            </p>
          </div>

          {close}
        </article>

        <article id="projetos" className={`${this.props.article === 'projetos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projetos Pessoais</h2>

          <h2>O que foi usado?</h2>
          <div>
            <p>
              <h3>Next.JS</h3>
                É um framework de aplicativos da web gratuito e de código aberto baseado em Vue.js , Node.js , Webpack
                e Babel.js, nos os o usamos para criar visualizações web em JavaScript
                utilizando o familiar Vue.js arquivo único componente do sistema
                e que pode funcionar tanto como no navegador aplicativo
                de página única Exibições bem como exibições da Web renderizadas pelo servidor.
              </p>
            <p>
              <h3>Trello</h3>
                É um aplicativo de gerenciamento de projeto baseado na Web, nos os usamos para desenvolver o projeto de uma maneira mais fácil e organizada.
              </p>
            <p>
              <h3>React</h3>
              O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web, nós os usamos para o desenvolvimento da web
            </p>
            <p>
              <h3>Github</h3>
               Usamos para trabalhar em nosso projeto de uma forma colaborativa planejando o projeto e acompanhando o trabalho.
            </p>
          </div>
          <h2>Responsabilidades</h2>

          <div>
            <h3>Lucas Martins</h3>
            <p>
              Instalação e configuração do template, ajustes de design e desenvolvimento da aba Tech Stack.
          </p>

            <h3>DANIEL MOREIRA</h3>
            <p>
              Configuração do template, ajustes de design e desenvolvimento da aba Quem Somos.
          </p>

            <h3>FELIPE LONNI</h3>
            <p>
              Desenvolvimento da aba Projetos Pessoais e revisão dos textos.
          </p>

          </div>


          {close}
        </article>

        <article id="Comments" className={`${this.props.article === 'Comments' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Comentários</h2>
        
        <div className="article-container">
          <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
          />
        </div>
         
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




