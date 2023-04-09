import { useContext, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Login from '../Pages/Auth/Login';
import { Store } from "../store";

function Auth({ children }) {

    const { setAuthName, logged, setLogged, dispach } = useContext(Store);

    useEffect(() => {
        axios
            .get('http://localhost:3004/login', { withCredentials: true })
            .then((res) => {
                if (res.data.status === 'ok') {
                    setAuthName(res.data.name);
                    setLogged(1);
                } else {
                    setAuthName(null);
                    setLogged(2);
                }
            })
            .catch((_) => {
                setAuthName(null);
                setLogged(2);
            });
    }, [dispach, setLogged, setAuthName]);

    if (null === logged) {
        return <Loader />;
    }

    if (1 === logged) {
        return <>{children}</>;
    }
    if (2 === logged) {
        console.log(2);
        return <Login />;
    }
}

export default Auth;