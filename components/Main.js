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
            <h3>A importancia do Quem Somos</h3>
            <p>
              Quem Somos tem o intuito de fazer sua apresentação pessoal ou do seu negócio, mostrandando para os visualizadores da página um pouco sobre sua vida ou de sua empresa, para que conheça um pouco da sua História.  
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
             Bom o que são projetos pessoais:é um processo ou objetivo que gere satisfação e motivação a um profissional fora de seu trabalho. Pode ser a execução de uma nova ideia, um hobby ou uma viagem, etc.
             Um projeto pessoal ajuda a testar ideias, a criar caminhos e a realizar novos feitos! gera satisfação e motivação a um profissional fora de seu trabalho. 

            </p>
            <p className="postby"> {/* Utilizar className*/}
                29/03/2020 - Felipe Lonni - Adaptado <a href="https://anajacobs.com.br/blog/2013/09/criando-um-projeto-pessoal/">Projetos pessoais.</a>
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

            <p className="technames"><a href="https://pt-br.reactjs.org/">ReactJS</a>, <a href="https://nodejs.org/en/">NodeJS</a>, <a href="https://www.javascript.com/">JavaScript</a>, <a href="https://nextjs.org/">Next JS</a>, <a href="https://www.google.com/search?sxsrf=ALeKk02l-58tQcNPIiFQW6zrOhRzgcAlqg%3A1585432291717&ei=48Z_Xo6VK6PD5OUPna6N4Ak&q=html&oq=html&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgQIABAKUK4JWPMMYNoQaABwAngAgAGIAYgBjAKSAQMwLjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjOksDEk77oAhWjIbkGHR1XA5wQ4dUDCAs&uact=5">HTML</a>, <a href="https://www.google.com/search?q=CSS&oq=CSS&aqs=chrome..69i57j0l4j69i60l2j69i61.446j0j7&sourceid=chrome&ie=UTF-8">CSS</a>, <a href="https://aws.amazon.com/pt/">AWS</a>, <a href="https://angular.io/">Angular</a>, <a href="https://ionicframework.com/">Ionic</a></p>
          </div>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Quem Somos</h2>
         <div className="poststyle">
          
            <h2>Lucas Martins </h2>
             <img width="310px" src="/static/images/lucas.jpg" alt="" />
          <p>Lucas Martins, Londrinense, 20 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento Web e Mobile utilizando ferramentas como: NodeJS, JavaScript, NextJS, ReactJS, Angular, Ionic, HMTL, CSS, entre outras. Trabalha na BRID Soluções na área de Qualidade de Dados como analista, densenvolvendo em ferramentas QlikView, QlikSense, 
              Power BI e Alteryx.
               Para mais informações do Lucas:  
          <div>
           <img width="40px" src="../static/images/linke.jpg" alt="linke"></img>   , 
           <img width="54px" src="../static/images/logo-github.jpg" alt="github"></img>
           <p className="technames"> <a href=" https://www.linkedin.com/in/lucas-m-martins/">linkedin</a>, <a href="https://github.com/mendsxx/BlogProducao">github</a> </p>
           </div>                             
         </p>
         </div>                                      
         
         <div className="poststyle">
          <h2>Daniel Moreira</h2>
            <img width="310px" src="/static/images/daniel.jpg" alt="" />
                <p> Daniel Moreira, Sertanopolense, 18 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento Web  utilizando ferramentas como: Angular, NextJS, ReactJS, NodeJS, HMTL, entre outras. Trabalha na JMTI Tecnologia e Soluções e na SDR Viagens.
                Para mais informações do Daniel:                                
                   <div>
                     <img width="40px" src="../static/images/linke.jpg" alt="linke"></img>   , 
                    <img width="54px" src="../static/images/logo-github.jpg" alt="github"></img>
                      <p className="technames"> <a href="https://www.linkedin.com/in/daniel-moreira-68177315a/">linkedin</a>, <a href="https://github.com/danielmoreiraunifil">github</a> </p>
              </div>                             
           </p>
          </div>

          <div className="poststyle">
          <h2>Felipe Lonni</h2> 
             <img width="310px" src="/static/images/foto.jpg" alt="" />
               <p>
                 Felipe Lonni, Cambeense, 19 anos, cursando Engenharia de Software - UNIFIL, tem aprofundado seus conhecimentos em desenvolvimento utilizando ferramentas como: Java, NextJS, HTML, entre outras. Trabalha no Sine de Cambé.
                    Para mais informações do Felipe: 
                    <div>
                     <img width="40px" src="../static/images/linke.jpg" alt="linke"></img>   , 
                    <img width="54px" src="../static/images/logo-github.jpg" alt="github"></img>
                      <p className="technames"> <a href="https://www.linkedin.com/in/felipe-lonni-127676181">linkedin</a>, <a href="https://github.com/Felps13">github</a> </p>
                  </div>   
             </p>
           </div>
          {close}
        </article>

        <article id="projetos" className={`${this.props.article === 'projetos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projetos Pessoais</h2>

          <p>
            <h2>O que foi usado?</h2>
            - Next.js: é um framework de aplicativos da web gratuito e de código aberto baseado em Vue.js , Node.js , Webpack 
            e Babel.js, nos os o usamos para criar visualizações web em JavaScript 
            utilizando o familiar Vue.js arquivo único componente do sistema 
            e que pode funcionar tanto como no navegador aplicativo 
            de página única Exibições bem como exibições da Web renderizadas pelo servidor.
            
            - Trello: é um aplicativo de gerenciamento de projeto baseado na Web, nos os usamos para desenvolver o projeto de uma maneira mais facil
            e organizada.

            - React:O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web, nos os usamos para o desenvolvimento da web
            
            - Github:usamos para trabalhar em nosso projeto de uma forma colaborativa planejando o projeto e acompanhando o trabalho. 
          
            </p>

          <p> 
            <h3>Lucas Mendes </h3>
              Ficou responsavel pela
            -Instalação do template
            -Configuração 
            -Personalizaçao do blog
            -Techstack
          </p>
          <p>
            <h3>Daniel Moreira</h3>
             Ficou responsavel pela
            -Configuração Inicial
            -Por dizer quem somos
          </p>
          <p>
            <h3>Felipe Lonni</h3>
             Ficou responsavel pela
            -Projetos Pessoais
            -Configuração</p>  
             
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


