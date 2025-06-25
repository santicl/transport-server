import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginTemplate from './Layouts/Login/LoginTemplate';
import Dashboard from './Layouts/Dashboard/Dashboard';
import Home from './Layouts/Home/Home';
//import RegisterTemplate from './Layouts/Register/Register';

function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LoginTemplate />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/dashboard/:id' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
