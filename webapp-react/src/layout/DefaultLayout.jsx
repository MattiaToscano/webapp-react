import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <>
            <header></header>
            <main className='container'>/*Pagine che cambiano */</main>
        </>
    )
};