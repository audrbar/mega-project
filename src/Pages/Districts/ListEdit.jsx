import { useContext } from 'react';
import { Store, actionsList } from '../../store';
import '../../styles/home.scss';

export function ListEdit() {
    const { store, dispach, imgUrl } = useContext(Store);

    return (
        <div className="stories container-fluid position-relative">
            <div className="row justify-content-center">
                <div className='d-flex flex-column align-items-center justify-content-center my-2'>
                    <h1>Peržiūrėk ir paremk</h1>
                    <h5>Bendruomenės finansuojamą idėją</h5>
                </div>
                <div className="card-group mb-5">
                    {store?.data?.map?.((s) => (
                        <div key={s.id} className="col-xl-3 col-md-4 col-sm-6">
                            <div className="card card-hover shadow m-2 p-2">
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
                                    <p className="card-text fst-italic">{s.description}</p>
                                    <p className="card-text text-secondary fst-italic">Autorius: {s.yourName}</p>
                                    <h6 className="card-text text-secondary fst-italic">Biudžetas: {s.budget} $</h6>
                                    <h6 className="card-text text-secondary fst-italic">Surinkta: {s.amount} $</h6>
                                    <h6 className="card-text text-danger">Liko surinkti: {s.budget - s.amount} $</h6>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={(_) =>
                                            dispach(
                                                actionsList[
                                                    'districts-show-edit'
                                                ](s.id)
                                            )
                                        }
                                    >
                                        Redaguoti
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger mx-2"
                                        onClick={(_) =>
                                            dispach(
                                                actionsList[
                                                    'districts-delete'
                                                ](s.id)
                                            )
                                        }
                                    >
                                        Ištrinti
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h5 className="copy-right text-secondary text-center">&#169; 2023 Bendruomenė-bendruomenei</h5>
        </div >
    );
}
