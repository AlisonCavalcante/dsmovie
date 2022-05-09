import {ReactComponent as GithubIcom} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    return (
        <header>
          <nav className='container'>
            <div className='nav-content'>
              <h1>
                Movies
              </h1>
              <a href="https://github.com/AlisonCavalcante">
                <div className='contato-container'>
                  <GithubIcom />
                  <p className='contato-container_link'>/AlisonCavalcante</p>
                </div>
              </a>
            </div>
          </nav>
        </header>
    );
}

export default  Navbar;