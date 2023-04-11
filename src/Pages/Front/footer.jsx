import '../../styles/home.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="middle">
                <h2>Apie mus</h2>
                <h5 className="text-secondary">
                    Sužinok daugiau apie projektą
                </h5>
            </div>
            <div className="steps">
                <div className="step">
                    <h2 className="step-number link-hover">
                        <i className="fa fa-map"></i>
                    </h2>
                    <h6 className="text-black">Aplankyk</h6>
                </div>
                <div className="step">
                    <h2 className="step-number link-hover">
                        <i className="fa fa-phone"></i>
                    </h2>
                    <h6 className="text-black">Skambink</h6>
                </div>
                <div className="step">
                    <h2 className="step-number link-hover">
                        <i className="fa fa-envelope"></i>
                    </h2>
                    <h6 className="text-black">Rašyk</h6>
                </div>
            </div>
            <h5 className="copy-right text-secondary">
                2023 Bendruomenė-bendruomenei
            </h5>
            <h5 className="copy-right text-secondary">
                &#169; Visos teisės saugomos
            </h5>
        </section>
    );
};

export default Footer;
