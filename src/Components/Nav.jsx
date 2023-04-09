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
                <div className="nav-item fs-4 text">
                    <Link to="home" className="nav-link active">
                        <span>Bendruomenė <i className="fa fa-sun-o fa-lg"></i> bendruomenei</span>
                    </Link>
                </div>
                {/* <div className="nav-item">
                    <Link action="sections-list" className="nav-link">Sritys</Link>
                    <Link to="sections-create" className="nav-link">Nauja Sritis</Link>
                    <Link action="common-list" className="nav-link">Komentarai</Link>
                    <Link to="comments-show-edit" className="nav-link">Komentarų peržiūra</Link>
                </div> */}
                {
                    authName ?
                        (
                            <div className='d-inline'>
                                <span className="nav-item mx-2"><b>{authName}</b></span>
                                <span className="nav-item mx-2 pointer link-hover" onClick={logOut}>Atsijungti</span>
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
