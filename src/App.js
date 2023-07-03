import { Routes, Route, Link, Outlet } from "react-router-dom";


import View3 from './view3';
import View4 from './view4';
import View5 from './view5';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<View3/>} />
            <Route path="/View4/" element={<View4/>} />
            <Route path="/View5/" element={<View5/>} />
            <Route path="*" element={<p>Erreur</p>} />
        </Routes>
    );
}

