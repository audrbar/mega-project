import '../styles/home.scss';
import Link from '../Components/Link';

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="home back-ground-image">
                    <h1>Pateik savo idėją!</h1>
                    <h5>Ir gauk sutelktąjį bendruomenės finasavimą</h5>
                    <span className="pradek">
                        <Link action="common-list" className="nav-link dabar">
                            <i class="fa fa-magic"></i> Pradėk dabar
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
                        <h2 className="step-number">1</h2>
                        <h5>Registruok savo idėją</h5>
                        <h6>Įrašyk savo vardą, gyvenamąją vietą</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">2</h2>
                        <h5>Įkelk pasakojimą</h5>
                        <h6>
                            Aprašyk savo sumanymą, papildyk jį vaizdo ir garso
                            medžiaga
                        </h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">3</h2>
                        <h5>Nurodyk siekiamą biudžetą</h5>
                        <h6>
                            Įrašyk veiklai užtikrinti reikiamą lėšų kiekį,
                            nurodyk pagrindines išlaidų eilutes
                        </h6>
                    </div>
                </div>
            </section>
            <section id="story">
                <div className="home back-ground-image1">
                    <h1>Prisidėk</h1>
                    <h5>Finansuok bendruomenei svarbią veiklą!</h5>
                    <span className="pradek">
                        <Link action="common-list" className="nav-link dabar">
                            <i class="fa fa-magic"></i> Paremk dabar
                        </Link>
                    </span>
                </div>
            </section>
            <section className="footer">
                <div className="middle">
                    <h2>Apie mus</h2>
                    <h5>Sužinok daugiau apie projektą</h5>
                </div>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-number">
                            <i class="fa fa-map"></i>
                        </h2>
                        <h6>Aplankyk</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">
                            <i class="fa fa-phone"></i>
                        </h2>
                        <h6>Skambink</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">
                            <i class="fa fa-envelope"></i>
                        </h2>
                        <h6>Rašyk mums</h6>
                    </div>
                </div>
                <h5 className="copy-right">2023 Bendruomenė-bendruomenei</h5>
                <h5 className="copy-right">&#169; Visos teisės saugomos</h5>
            </section>
        </>
    );
}
