import { useContext } from 'react';
import { Store } from '../../store';
import '../../styles/home.scss';

export default function ListFinished() {
    const { store, imgUrl } = useContext(Store);

    return (
        <div className="stories container-fluid position-relative">
            <div className="row justify-content-center">
                <div className="card-group card-group-finished flex-nowrap align-content-stretch py-3">
                    {store?.data?.map?.((s) => (
                        <div key={s.id} className="col-xl-3 col-md-4 col-sm-6 align-content-stretch">
                            <div className="card card-hover shadow d-flex align-content-stretch justify-content-start m-2 p-3 w-150 stories">
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
                                    <p className="card-text text-secondary">{s.description}</p>
                                    <p className="card-text text-secondary">Autorius: {s.yourName}</p>
                                    <h6 className="card-text text-danger">Surinktas biudžetas: {s.budget}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='position-absolute stories-title card-hover opacity-75'>
                <h1>Peržiūrėk</h1>
                <h5>Biudžetą jau surinkusias idėjas</h5>
            </div>
        </div >
    );
}
