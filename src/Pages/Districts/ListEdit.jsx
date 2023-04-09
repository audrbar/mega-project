import { useContext } from 'react';
import { Store, actionsList } from '../../store';
import '../../styles/home.scss';

export function ListEdit() {
    const { store, dispach, imgUrl } = useContext(Store);

    return (
        <div className="stories container-fluid position-relative">
            <div className="row justify-content-center">
                <div className='d-flex flex-column align-items-center justify-content-center my-4'>
                    <h1>Peržiūrėk ir paremk</h1>
                    <h5>Bendruomenės finansuojamą idėją</h5>
                </div>
                <div className="card-group flex-nowrap align-content-stretch">
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
                                    <p className="card-text">{s.description}</p>
                                    <p className="card-text">Autorius: {s.yourName}</p>
                                    <h6 className="card-text">Biudžetas: {s.budget}</h6>
                                    <h6 className="card-text">Surinkta: {s.amount}</h6>
                                    <h6 className="card-text">Trūksta: {s.budget - s.amount}</h6>
                                    <button
                                        type="button"
                                        className="btn btn-success"
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
                                        className="btn btn-danger"
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
        </div >
    );
}
