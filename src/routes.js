import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./Pages/SobreMim";
import Base from "Components/Base";
import Inicio from "Pages/Inicio";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
        <Route path="/" element={<Inicio/>}/>
        <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
