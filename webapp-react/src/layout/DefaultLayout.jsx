import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GlobalContext from "../context/globalContext";
import Loader from "../components/Loader";

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext); // consumo il contesto globale

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {Loader && isLoading && (
                <Loader /> // Mostra il loader se isLoading è true
            )}
        </>
    )
}

export default DefaultLayout
