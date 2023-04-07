import { useContext } from 'react';
import { Store, actionsList } from '../../store';
import '../../styles/home.scss';

export default function List() {
    const { store, dispach, imgUrl } = useContext(Store);

    return (
        <div className="stories container-fluid position-relative">
            <div className="row justify-content-center">
                <div className="card-group flex-nowrap">
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
                                        <span>{s.title}</span>
                                    </div>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
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
            <div className='position-absolute stories-title'>
                <h1>Peržiūrėk</h1>
                <h5>Bendruomenės finansuojamas idėjas</h5>
            </div>
        </div >
    );
}
