import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Header from "./Components/Header";



function AppRoutes() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
