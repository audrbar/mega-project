import Link from './Link';
import '../styles/nav.scss';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i class="fa fa-sun-o fa-lg"></i>
                    <span className="nav-logo">
                        <span>Bendruomenė</span>
                        <span>bendruomenei</span>
                    </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="home" className="nav-link active">
                                Pradinis
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link action="common-list" className="nav-link">
                                Pasiūlymai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link action="sections-list" className="nav-link">
                                Sritys
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link action="districts-list" className="nav-link">
                                Rajonai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="sections-create" className="nav-link">
                                Nauja Sritis
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="districts-create" className="nav-link">
                                Naujas rajonas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="comments-show-edit" className="nav-link">
                                Pasiūlymų peržiūra
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link to="login" className="nav-link">
                            Prisijungti
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}
