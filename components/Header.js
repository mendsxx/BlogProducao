import PropTypes from 'prop-types';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
         <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projetos')}}>Projetos Pessoais</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('techstack')}}>Tech Stack</a></li>      
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Quem somos</a></li>
                

            </ul>
        </nav>
        
        <div className="content">
            <div className="inner">
                <h1>Bem-Vindo!</h1>
                <p>Neste Blog você pode conhecer um pouco mais sobre desenvolvimento Web.</p>
            </div>
        </div>
       
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
