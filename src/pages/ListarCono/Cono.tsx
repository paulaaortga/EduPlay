import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cono.css";

// Definimos la interfaz de la actividad
interface Actividad {
  _id: string;
  tipo: string;
  asignatura: string;
  curso: string;
  datos: {
    descripcion?: string;
    enunciado?: string;
    texto?: string;
    columnas?: {
      A: string[];
      B: string[];
    };
    opciones?: string[];
    respuestas?: Record<string, string> | string;
    respuesta?: string;
  };
  fechaCreacion: string;
}

export default function ListadoActividadesMates() {
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [cargando, setCargando] = useState(true); 

  // Cargar todas las actividades al montar el componente
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get("http://localhost:3001/asignatura/Conocimiento del medio");
        setActividades(response.data.actividades);
      } catch (error) {
        console.error("Error al obtener las actividades", error);
      }finally{
        setCargando(false);
      }
    };

    fetchActividades();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="listadoC-container">
      <h2 className="listadoC-title">Actividades de Conocimiento del Medio</h2>


      {cargando ? (
        <p>Cargando actividades...</p>
      ) : actividades.length === 0 ? (
        <p className="mensaje-vacio">No hay actividades disponibles para esta asignatura.</p>
      ) : (
      <table className="tabla-actividadesC">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Asignatura</th>
            <th className="border px-4 py-2">Curso</th>
            <th className="border px-4 py-2">Descripción</th>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((act) => (
            <tr key={act._id} className="border-b">
              <td className="border px-4 py-2 capitalize">{act.tipo}</td>
              <td className="border px-4 py-2">{act.asignatura}</td>
              <td className="border px-4 py-2">{act.curso}</td>
              <td className="border px-4 py-2">
                {act.datos.descripcion || act.datos.enunciado || act.datos.texto?.slice(0, 40) + "..."}
              </td>
              <td className="border px-4 py-2">
                {new Date(act.fechaCreacion).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    )}
      <div className="botones-container">
        <button
          onClick={() => navigate("/asignaturas")}
          className="boton-generar"
        >
          Volver
        </button>

      </div>
    </div>
  );
}