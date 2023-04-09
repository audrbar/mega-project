import { useState, useContext } from 'react';
import axios from 'axios';
import { Store, actionsList } from "../../store";
import { navigate } from '../../actions';

export default function Login() {
    const [userName, setUserName] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [psw, setPsw] = useState('');
    const { dispach } = useContext(Store);

    const { setLogged, setAuthName } = useContext(Store);

    const login = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3004/login',
                { name, psw },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.status === 'ok') {
                    setUserName(res.data.name);
                    setName('');
                    setPsw('');
                    setError(null);
                    setLogged(true);
                    setAuthName(res.data.name);
                    dispach(navigate('home'));
                } else {
                    setError(true);
                    setUserName(null);
                }
            });
    };

    return (
        <div className="container-fluid back-ground-image2">
            <div className="d-flex justify-content-center">
                <div className="mt-5 col-sm-6 col-md-6">
                    <div className="card card-hover shadow d-flex align-content-stretch justify-content-start m-2 p-3 w-150">
                        <p className="text-xl mb-3 md:mb-0">
                            {error ? (
                                <span style={{ color: 'crimson' }}>Prisijungimo klaida</span>
                            ) : (
                                <span><h4>Prisijunk</h4></span>
                            )}
                        </p>
                        <p className="text-xl mb-3">
                            {userName ? (
                                <span>Sveikas, {userName}!</span>
                            ) : (
                                <span>Sveikas atvykęs! </span>
                            )}
                        </p>
                        <div className="flex flex-col items-center justify-between gap-y-2 gap-x-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Vartotojo vardas..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="form-control mt-3"
                                type="password"
                                placeholder="Slaptažodis..."
                                value={psw}
                                onChange={(e) => setPsw(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-secondary mt-3"
                                onClick={login}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
