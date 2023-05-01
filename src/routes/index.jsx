import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import Register from '../pages/Register';
import Admin from '../pages/Admin';

import Private from './Private';

function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/admin' element={<Private> <Admin/> </Private>} />

            <Route path='*' element={<Home/>} />
        </Routes>
    )
}

export default RoutesApp;