import Link from './Link';
import { useContext } from 'react';
import { Store } from "../store";

export default function Nav() {

    const { authName, logOut } = useContext(Store);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between text-success">
                <div className="nav-item d-flex">
                    {
                        authName ?
                            (
                                <Link to="districts-list" className="nav-link">Redaguoti</Link>
                            ) :
                            (
                                <Link to="districts-list-donate" className="nav-link mx-2">Prisidėti</Link>
                            )
                            || null
                    }
                </div>
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
                {
                    authName ?
                        (
                            <div className='d-inline'>
                                <span className="nav-item mx-2"><b>{authName}</b></span>
                                <Link action="logout" className="nav-link">Atsijungti</Link>
                            </div>
                        ) :
                        (
                            <Link to="login" className="nav-link">Prisijungti</Link>
                        )
                }
            </div>
        </nav>
    );
}
