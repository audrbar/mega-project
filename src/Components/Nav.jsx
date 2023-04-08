import Link from './Link';
// import '../styles/nav.scss';

export default function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between text-success">
                <div className="nav-item"></div>
                <div className="nav-item  fs-4 text">
                    <Link to="home" className="nav-link active">
                        <span>Bendruomenė </span>
                        <i className="fa fa-sun-o fa-lg"></i>
                        <span> Bendruomenei</span>
                    </Link>
                </div>
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="home" className="nav-link active">
                            Pradinis
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link action="districts-list" className="nav-link">
                            Finansuojama
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="districts-create" className="nav-link">
                            Pateik idėją
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link action="sections-list" className="nav-link">
                            Sritys
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="sections-create" className="nav-link">
                            Nauja Sritis
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link action="common-list" className="nav-link">
                            Komentarai
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="comments-show-edit" className="nav-link">
                            Komentarų peržiūra
                        </Link>
                    </li>
                </ul> */}
                <span className="nav-item">
                    <Link to="login" className="nav-link">
                        Prisijungti
                    </Link>
                </span>
            </div>
        </nav>
    );
}
