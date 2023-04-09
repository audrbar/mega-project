import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { useContext } from 'react';
import { Store } from './store';

import Nav from './Components/Nav';
import Home from './Pages/Home';

import Login from './Pages/Auth/Login';

import Messages from './Components/Messages';
import Loader from './Components/Loader';
import Auth from './Components/Auth';

import SectionsList from './Pages/Sections/List';
import SectionsCreate from './Pages/Sections/Create';
import SectionsEdit from './Pages/Sections/Edit';

import DistrictsCreate from './Pages/Districts/Create';
import { EditDonate } from './Pages/Districts/EditDonate';
import { EditDistrict } from './Pages/Districts/EditDistrict';
import { ListEdit } from './Pages/Districts/ListEdit';

import CommentsEdit from './Pages/Comments/List';

import CommonList from './Pages/Front/List';
import Comments from './Pages/Front/Comments';
import { ListDonate } from './Pages/Districts/ListDonate';

function App() {
    const { page, pageTop, messages, loader } = useContext(Store);

    return (
        <>
            {loader ? <Loader /> : null}

            {pageTop === 'nav' ? <Nav /> : null}

            {messages && messages.length ? (
                <Messages messages={messages} />
            ) : null}

            {console.log('PAGE:', page)}

            {page === 'home' ? <Home /> : null}
            {page === 'sections-create' ? <SectionsCreate /> : null}
            {page === 'sections-list' ? <SectionsList /> : null}
            {page === 'sections-show-edit' ? <SectionsEdit /> : null}

            {page === 'districts-create' ? <DistrictsCreate /> : null}
            {page === 'districts-list' ? <ListEdit /> : null}
            {page === 'districts-list-donate' ? <ListDonate /> : null}
            {page === 'districts-show-edit' ? <Auth><EditDistrict /></Auth> : null}
            {page === 'districts-show-edit-donate' ? <EditDonate /> : null}

            {page === 'common-list' ? <CommonList /> : null}
            {page === 'comments' ? <Comments /> : null}

            {page === 'comments-show-edit' ? <CommentsEdit /> : null}

            {page === 'login' ? <Login /> : null}
        </>
    );
}

export default App;
