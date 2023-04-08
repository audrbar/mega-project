import '../../app.scss';
import { useContext, useEffect, useState } from 'react';
import { actionsList, Store } from '../../store';

export function EditDonate() {
    const { store, dispach, imgUrl } = useContext(Store);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (null === store) {
            return;
        }
        setAmount(store.data.amount);
    }, [store]);
    console.log('parduotuve', store);
    const edit = (_) => {
        dispach(
            actionsList['districts-edit'](
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
                <div className="col-md-6">
                    <div className="card m-5">
                        <div className="card-img-top m-1">
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
                                    Remi idėją: {store.data.title}
                                </label>
                                <h6>
                                    Idėjos biudžetas: {store.data.budget} $
                                </h6>
                                <h6>
                                    Iki šiol surinkta: {store.data.amount} $
                                </h6>
                                <h6>
                                    Gali paremti: {store.data.budget - store.data.amount} $
                                </h6>
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
                                className="btn btn-success"
                                onClick={edit}
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
