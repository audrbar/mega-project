import '../styles/home.scss';

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="home back-ground-image">
                    <h1>Pateik savo idėją!</h1>
                    <h5>Gauk sutelktąjį bendruomenės finasavimą</h5>
                </div>
            </section>
            <section className="start">
                <div className="middle">
                    <h2>Nuo ko pradėti...</h2>
                    <h5>Trys paprasti žingsniai:</h5>
                </div>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-number">1</h2>
                        <h6>Registruok idėją</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">2</h2>
                        <h6>Įkelk pasakojimą</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">3</h2>
                        <h6>Nurodyk siekiamą biudžetą</h6>
                    </div>
                </div>
            </section>
            <section id="story">
                <div className="home back-ground-image1">
                    <h1>Kur TU gali prisidėti</h1>
                    <h5>Finansuok bendruomenei svarbią veiklą!</h5>
                </div>
            </section>
            <section className="footer">
                <div className="middle">
                    <h2>Apie mus</h2>
                    <h5>Sužinok daugiau apie projektą</h5>
                </div>
                <div className="steps">
                    <div className="step">
                        <h2 className="step-number">1</h2>
                        <h6>Parašyk mums</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">2</h2>
                        <h6>Paskambink</h6>
                    </div>
                    <div className="step">
                        <h2 className="step-number">3</h2>
                        <h6>Prisijunk prie mūsų</h6>
                    </div>
                </div>
                <h5 className="copy-right">
                    &#169; 2023 Bendruomenė bendruomenei
                </h5>
            </section>
        </>
    );
}
