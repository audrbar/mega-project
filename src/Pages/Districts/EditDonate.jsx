import '../../app.scss';
import { useContext, useState, useEffect } from 'react';
import { actionsList, Store } from '../../store';

export function EditDonate() {
    const { store, dispach, imgUrl } = useContext(Store);
    const [amount, setAmount] = useState(0);

    const editdonate = (_) => {
        dispach(
            actionsList['districts-edit-donate'](
                {
                    ...store.data,
                    amount
                },
                store.data.id
            )
        );
    };

    return (
        <div className="container-fluid back-ground-image2">
            <div className="d-flex justify-content-center">
                <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 mt-5">
                    <div className="card card-hover shadow d-flex align-content-stretch justify-content-start m-2 p-3">
                        <div className="card-img-top">
                            {store.data.photo ? (
                                <img
                                    src={
                                        imgUrl + store.data.photo
                                    }
                                    alt="nice"
                                    className='card-img object-fit-cover'
                                ></img>
                            ) : null}
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">
                                    <h5>
                                        Remi idėją: {store.data.title}
                                    </h5>
                                    <h6 className='text-secondary fst-italic'>
                                        Idėjos biudžetas: {store.data.budget} $
                                    </h6>
                                    <h6 className='text-secondary fst-italic'>
                                        Iki šiol surinkta: {store.data.amount} $
                                    </h6>
                                    <h6 className='text-secondary text-danger'>
                                        Liko surinkti: {store.data.budget - store.data.amount} $
                                    </h6>
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={amount}
                                    max={store.data.budget - store.data.amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <div className="form-text fst-italic">
                                    Įrašyk sumą
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={editdonate}
                            >
                                Prisidedu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
