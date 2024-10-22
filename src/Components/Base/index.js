import Banner from "Components/Banner";
import Header from "Components/Header";
import Rodape from "Components/Rodape";
import Inicio from "Pages/Inicio";
import { Outlet } from "react-router-dom";

export default function Base(){
    return(
        <main>
        <Header/>
        <Banner/>
        <Outlet/>
        <Rodape/>
        </main>
    )
}