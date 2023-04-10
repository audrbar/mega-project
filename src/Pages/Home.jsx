import '../styles/home.scss';
import { useEffect, useContext } from 'react';
import Link from '../Components/Link';
import ListFinished from './Districts/ListFinished';
import { Store } from '../store';
import { districtsList } from '../actions';
import Footer from './Front/Footer';

export default function Home() {

    const { dispach } = useContext(Store);

    useEffect(() => {
        dispach(districtsList(true));
    }, []);

    return (
        <>
            <section id="hero">
                <div className="home back-ground-image">
                    <h1>Pateik savo idėją!</h1>
                    <h5>Ir gauk sutelktąjį bendruomenės finansavimą</h5>
                    <span className="pradek link-hover">
                        <Link to="districts-create" className="nav-link dabar">
                            <i className="fa fa-magic"></i> Pradėk dabar
                        </Link>
                    </span>
                </div>
            </section>
            <section className="start">
                <div className="middle">
                    <h2>Nuo ko pradėti</h2>
                    <h5>Trys paprasti žingsniai</h5>
                </div>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-number link-hover">1</h2>
                        <h5>Registruok savo idėją</h5>
                        <h6>Įrašyk savo vardą, gyvenamąją vietą</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number link-hover">2</h2>
                        <h5>Įkelk pasakojimą</h5>
                        <h6>
                            Aprašyk savo sumanymą ir papildyk jį vaizdo ir garso
                            medžiaga
                        </h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number link-hover">3</h2>
                        <h5>Nurodyk siekiamą biudžetą</h5>
                        <h6>
                            Įrašyk veiklai užtikrinti reikiamą biudžetą ir pagrįsk jį
                        </h6>
                    </div>
                </div>
            </section>
            <section id="story">
                <div className="home back-ground-image1">
                    <h1>Prisidėk</h1>
                    <h5>Finansuok bendruomenei svarbią veiklą!</h5>
                    <span className="pradek link-hover">
                        <Link to="districts-list-donate" className="nav-link dabar">
                            <i className="fa fa-magic"></i> Prisidėk dabar
                        </Link>
                    </span>
                </div>
            </section>
            <ListFinished />
            <Footer />
        </>
    );
}
