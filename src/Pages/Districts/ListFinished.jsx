import { useContext } from 'react';
import { Store, actionsList } from '../../store';
import '../../styles/home.scss';

export default function ListFinished() {
    const { store, dispach, imgUrl } = useContext(Store);

    return (
        <div className="stories container-fluid position-relative">
            <div className="row justify-content-center">
                <div className="card-group flex-nowrap align-content-stretch">
                    {store?.data?.map((s) => (
                        <div className="col-xl-3 col-md-4 col-sm-6 align-content-stretch">
                            <div key={s.id} className="card card-hover shadow d-flex align-content-stretch justify-content-start m-2 p-3 w-100 stories">
                                <div className="card-img-top">
                                    {s.photo ? (
                                        <img
                                            src={
                                                imgUrl + s.photo
                                            }
                                            alt="nice"
                                            className='card-img object-fit-cover'
                                        ></img>
                                    ) : null}
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>{s.title}</h4>
                                    </div>
                                    <p class="card-text text-secondary">{s.description}</p>
                                    <p class="card-text text-secondary">Autorius: {s.yourName}</p>
                                    <h6 class="card-text text-danger">Surinktas biudžetas: {s.budget}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='position-absolute stories-title'>
                <h1>Peržiūrėk</h1>
                <h5>Bendruomenės jau prafinansuotas idėjas</h5>
            </div>
        </div >
    );
}
