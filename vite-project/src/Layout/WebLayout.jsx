import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const WebLayout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default WebLayout