import { Routes, Route, useLocation } from "react-router-dom";
import Actividad from "./pages/generarActividad/Actividad";
import Listar from "./pages/listarActividad/Listar";
import Inicio from "./pages/Inicio/Roles";
import Layout from "./components/Layout";
import Alumno from "./pages/InicioAlumno/Alumno";
import Asignaturas from "./pages/mostrarAsignaturas/Asignaturas";
import Matematicas from "./pages/ListarMates/Matex";
import Lengua from "./pages/ListarLengua/Lengua";
import Cono from "./pages/ListarCono/Cono";
import Ingles from "./pages/ListarIngles/Ingles";
import LayoutAlumno from "./components/LayoutAlumno";

export default function MainRouter() {

  const location = useLocation();
  const isInicio = location.pathname === "/";
  const isAlumno = location.pathname === "/alumno" || location.pathname === "/asignaturas" || location.pathname === "/matematicas" || location.pathname === "/lengua" || location.pathname === "/conocimiento" || location.pathname === "/ingles";

  return (
    <>
      {!isInicio && ( isAlumno ? <LayoutAlumno /> : <Layout />)}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="/conecta" element={<Actividad />} />
        <Route path="/alumno" element={<Alumno />} />
        <Route path="/asignaturas" element={<Asignaturas />} />
        <Route path="/matematicas" element={<Matematicas />} />
        <Route path="/lengua" element={<Lengua />} />
        <Route path="/conocimiento" element={<Cono />} />
        <Route path="/ingles" element={<Ingles />} />
      </Routes>
    </>
  );
}