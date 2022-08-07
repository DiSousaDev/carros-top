import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-primary navbar navbar-expand-md main-nav'>
            <div className='container-fluid'>
                <Link to={'/'} className='nav-logo-text'>
                    <h4>Carros Top</h4>
                </Link>
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
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'}>Catálogo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar