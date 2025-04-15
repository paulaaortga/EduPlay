import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Lengua.css";

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

  // Cargar todas las actividades al montar el componente
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get("http://localhost:3001/asignatura/Lengua");
        setActividades(response.data.actividades);
      } catch (error) {
        console.error("Error al obtener las actividades", error);
      }
    };

    fetchActividades();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="listadoL-container">
      <h2 className="listadoL-title">Actividades de Lengua</h2>

      <table className="tabla-actividadesL">
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