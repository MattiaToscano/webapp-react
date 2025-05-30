import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <Header></Header>
            <main className='container'>
                <Outlet />
            </main>
        </>
    )
};

export default DefaultLayout;