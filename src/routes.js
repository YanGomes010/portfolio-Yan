import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./Pages/SobreMim";
import Base from "Components/Base";
import Inicio from "Pages/Inicio";
import Post from "Pages/Post";
import NaoEncontrada from "Pages/NaoEncontrada";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
        <Route index element={<Inicio/>}/>
        <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
        <Route path="post/:id" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
