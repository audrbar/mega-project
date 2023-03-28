import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import './app.css';
import Nav from './Components/Nav';
import { Store } from './store';
import Home from './Pages/Home';
import SectionsCreate from './Pages/Sections/Create';

function App() {
    const { page, pageTop } = useContext(Store);

    return (
        <>
            {pageTop === 'nav' ? <Nav /> : null}
            {page === 'home' ? <Home /> : null}
            {page === 'sections-create' ? <SectionsCreate /> : null}
        </>
    );
}

export default App;
