import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <Header></Header>
            <main className='container'>/*Pagine che cambiano */</main>
        </>
    )
};