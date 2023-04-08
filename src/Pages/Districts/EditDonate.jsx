import { useContext, useEffect, useState } from 'react';
import { actionsList, Store } from '../../store';

export function EditDonate() {
    const { store, dispach } = useContext(Store);
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card m-5">
                        <div className="card-header">Rajonas</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">
                                    Redaguoti rajoną
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <div className="form-text">
                                    Pakeiskite rajono pavadinimą
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={edit}
                            >
                                Prisidėk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
