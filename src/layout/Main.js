import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import NavBar from '../Components/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;