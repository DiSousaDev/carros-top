import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
    return (
        <nav className='bg-primary navbar navbar-expand-md main-nav'>
            <div className='container-fluid'>
                <a href="link" className='nav-logo-text'>
                    <h4>Carros Top</h4>
                </a>
                <button
                    className='navbar-toggler navbar-btn-color'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#ct-navbar'
                    aria-controls='ct-navbar'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='ct-navbar'>
                    <ul className='navbar-nav offset-md-2 main-menu'>
                        <li>
                            <a href="link">Home</a>
                        </li>
                        <li>
                            <a href="link">Catálogo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar