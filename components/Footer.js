import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">&copy; Next.js Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js. </a></p>
        <p className="copyright">&copy; Photo by: <a href="https://unsplash.com/@ikukevk">Kevin Ku</a> on: <a href="https://unsplash.com/">Unsplash</a>.</p>
        <p className="copyright">&copy; Icones: <a href="https://icon-icons.com/">icons-icons</a> by: <a href="https://github.com/robertohuertasm">Roberto Huertas</a> | John Gardner</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
