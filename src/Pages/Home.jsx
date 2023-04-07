import '../styles/home.scss';

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="home back-ground-image">
                    <h1>Pateik savo idėją!</h1>
                    <h6>Gauk sutelktąjį bendruomenės finasavimą</h6>
                </div>
            </section>
            <section className="start">
                <div className="middle">
                    <h2>Nuo ko pradėti...</h2>
                    <h6>Trys paprasti žingsniai:</h6>
                </div>
                <div className="steps-group">
                    <div className="steps">
                        <h2 className="steps-number">1</h2>
                        <h6>Registruok idėją</h6>
                    </div>
                    <div className="steps-number">
                        <h2 className="steps-number">2</h2>
                        <h6>Įkelk pasakojimą</h6>
                    </div>
                    <div className="steps-number">
                        <h2 className="steps-number">3</h2>
                        <h6>Nurodyk siekiamą biudžetą</h6>
                    </div>
                </div>
            </section>
            <section id="story">
                <div className="home back-ground-image1">
                    <h1>Kur TU gali prisidėti</h1>
                    <h6>Finansuok bendruomenei svarbią veiklą!</h6>
                </div>
            </section>
            <section className="start">
                <div className="middle">
                    <h2>Apie mus</h2>
                    <h6>Sužinok daugiau apie projektą</h6>
                </div>
                <div className="steps-group">
                    <div className="steps">
                        <h2 className="steps-number">1</h2>
                        <h6>Parašyk mums</h6>
                    </div>
                    <div className="steps-number">
                        <h2 className="steps-number">2</h2>
                        <h6>Gali paskambinti</h6>
                    </div>
                    <div className="steps-number">
                        <h2 className="steps-number">3</h2>
                        <h6>Prisijunk prie mūsų</h6>
                    </div>
                </div>
                <h2>2023</h2>
            </section>
        </>
    );
}
