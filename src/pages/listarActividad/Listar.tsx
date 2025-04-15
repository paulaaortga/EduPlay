import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Listar.css";

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

const tipos = ["conecta", "test", "huecos"];


export default function ListadoActividades({ onVolver }: { onVolver: () => void }) {
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [detallesVisibles, setDetallesVisibles] = useState<string | null>(null);
  const [actividadAEliminar, setActividadAEliminar] = useState<Actividad | null>(null);


  const eliminarActividad = async (id: string, tipo: string) => {
    try {
      const response = await axios.delete(`http://localhost:3001/${tipo}/${id}`);
      console.log("Actividad eliminada:", response.data);
  
      // Actualizamos el estado para reflejar el cambio en el frontend
      setActividades(prev => prev.filter(act => act._id !== id));
      setActividadAEliminar(null);
    } catch (error) {
      console.error("Error eliminando la actividad", error);
    }
  };

  useEffect(() => {
    const fetchTodas = async () => {
      try {
        const resultados: Actividad[] = [];

        for (const tipo of tipos) {
          const response = await axios.get(`http://localhost:3001/${tipo}`);
          resultados.push(...response.data); // cada uno devuelve un array
        }

        setActividades(resultados);
      } catch (error) {
        console.error("Error al obtener las actividades", error);
      }
    };

    fetchTodas();
  }, []);

  const toggleDetalle = (id: string) => {
    setDetallesVisibles((prev) => (prev === id ? null : id));
  };

  const navigate = useNavigate();

  const renderDetalle = (actividad: Actividad) => {
    const { tipo, datos } = actividad;

    if (tipo === "conecta" && datos.columnas) {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <strong>Columna A:</strong>
              <ul className="list-disc ml-5">
                {datos.columnas.A.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Columna B:</strong>
              <ul className="list-disc ml-5">
                {datos.columnas.B.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {datos.respuestas && typeof datos.respuestas === "object" && (
            <div className="mt-2">
              <strong>Respuestas:</strong>
              <ul className="list-disc ml-5">
                {Object.entries(datos.respuestas).map(([a, b], idx) => (
                  <li key={idx}>
                    {a} → {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      );
    }

    if (tipo === "test" && datos.enunciado) {
      return (
        <div className="mt-2">
          <p><strong>Enunciado:</strong> {datos.enunciado}</p>
          {datos.opciones?.map((opcion, idx) => (
            <p key={idx}>• {opcion}</p>
          ))}
          {datos.respuesta && (
            <p className="mt-1 text-green-600">
              <strong>Respuesta correcta:</strong> {datos.respuesta}
            </p>
          )}
        </div>
      );
    }

    if (tipo === "huecos" && datos.texto) {
      return (
        <div className="mt-2">
          <p>{datos.texto.replace("__", "[_____]")}</p>
          {datos.respuesta && (
            <p className="mt-1 text-green-600">
              <strong>Respuesta:</strong> {datos.respuesta}
            </p>
          )}
        </div>
      );
    }

    return <p className="italic text-gray-500">Sin actividades disponibles</p>;
  };

  return (
    <div className="listado-container">
      <h2 className="listado-title">Actividades Guardadas</h2>

      <table className="tabla-actividades">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Asignatura</th>
            <th className="border px-4 py-2">Curso</th>
            <th className="border px-4 py-2">Enunciado</th>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Detalle</th>
            <th className="border px-4 py-2">   </th>
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
              <td className="border px-4 py-2">
                <button
                  className="boton-ver"
                  onClick={() => toggleDetalle(act._id)}
                >
                  {detallesVisibles === act._id ? "Ocultar" : "Ver"}
                </button>
              </td>
              <td className="border px-4 py-2">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/full-trash--v1.png"
                    alt="Eliminar"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActividadAEliminar(act)}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detalle expandido */}
      {detallesVisibles && (
        <div className="detalle-actividad">
          <h3 className="text-lg font-semibold mb-2">Detalle de la Actividad</h3>
          {renderDetalle(actividades.find((a) => a._id === detallesVisibles)!)}
        </div>
      )}

    <div className="botones-container">
        <button
            onClick={() => navigate("/")}
            className="boton-generar"
        >
            Volver
        </button>

        <button
            onClick={() => navigate("/conecta")}
            className="boton-generar"
        >
            Generar Actividad 
        </button>
    </div>

        {actividadAEliminar && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>¿Estás seguro de que quieres eliminar esta actividad?</h3>
          <p><strong>Tipo:</strong> {actividadAEliminar.tipo}</p>
          <p><strong>Asignatura:</strong> {actividadAEliminar.asignatura}</p>

          <div className="modal-buttons">
            <button
              className="boton-cancelar"
              onClick={() => setActividadAEliminar(null)}
            >
              Cancelar
            </button>
            <button
              className="boton-eliminar"
              onClick={() =>
                eliminarActividad(actividadAEliminar._id, actividadAEliminar.tipo)
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    )}

    </div>
  );
}