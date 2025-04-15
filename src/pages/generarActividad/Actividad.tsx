import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Actividad.css";

export default function App() {
  const [tipo, setTipo] = useState("conecta");
  const [asignatura, setAsignatura] = useState("Matemáticas");
  const [curso, setCurso] = useState("1º");
  const [actividad, setActividad] = useState(null);
  const [actividadAceptada, setActividadAceptada] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const asignaturas = ["Matemáticas", "Lengua", "Inglés", "Conocimiento del medio", "Plástica"];
  const cursos = ["1º", "2º", "3º", "4º", "5º", "6º"];

  const generarActividad = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/${tipo}`, {
        asignatura,
        curso,
      });
      setActividad(response.data.ejercicio);
    } catch (error) {
      console.error("Error generando la actividad", error);
    }
  };

  const aceptarActividad = async () => {
    try {
        const response = await axios.post("http://localhost:3001/aceptar", {
            tipo,  // Enviar el tipo de ejercicio (conecta, test o huecos)
            asignatura,
            curso
        });
        console.log("Actividad guardada con éxito:", response.data);
        setActividad(response.data.actividad); 
        setActividadAceptada(true);
        navigate("/listar"); 
    } catch (error) {
        console.error("Error al aceptar la actividad:", error);
    }
  };

    const rechazarActividad = async () => {
      setLoading(true);
      try {
          const response = await axios.post("http://localhost:3001/rechazar", {
              tipo,  // Enviar el tipo de ejercicio (conecta, test o huecos)
              asignatura,
              curso
          });
          console.log("Actividad guardada con éxito:", response.data);
          setActividad(response.data.ejercicio); 
      } catch (error) {
          console.error("Error al aceptar la actividad:", error);
      }finally{
        setLoading(false);
      }
};

  return (
    <div className="generador-container">
        <div className="generador-form">
      <h1 className="generador-title">Generador de Actividades</h1>

      {/* Tabla de selección */}
      
        <table className="generador-table">
          <tbody>
            <tr>
              <td><label>Tipo de Actividad: </label></td>
              <td>
                <select className="generador-select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                  <option value="conecta">Relacionar Conceptos</option>
                  <option value="test">Pregunta Test</option>
                  <option value="huecos">Rellenar Huecos</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Asignatura: </label></td>
              <td>
                <select className="generador-select" value={asignatura} onChange={(e) => setAsignatura(e.target.value)}>
                  {asignaturas.map((asig) => (
                    <option key={asig} value={asig}>
                      {asig}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Curso: </label></td>
              <td>
                <select className="generador-select" value={curso} onChange={(e) => setCurso(e.target.value)}>
                  {cursos.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Botón para generar la actividad */}
      <div className="botones-container">
        <button
            onClick={() => navigate("/listar")}
            className="boton-generar"
        >
            Volver
        </button>

        <button className="boton-generar" onClick={generarActividad}>Generar</button>
    </div>
      </div>

      
      {loading && (
        <div className="text-center my-4 text-blue-600 font-medium">
          Cargando actividad...
        </div>
      )}


      {/* Mostrar la actividad generada */}
      {actividad && !loading &&(
        <div className="detalle-actividad">
          <h2 className="font-bold">{actividad.descripcion || actividad.nombre}</h2>

          {tipo === "conecta" && actividad.columnas && (
            <>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <h3 className="font-semibold">Columna A</h3>
                  {actividad.columnas.A.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold">Columna B</h3>
                  {actividad.columnas.B.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
              {actividad.respuestas && typeof actividad.respuestas === "object" && (
                <div className="mt-4">
                  <h4 className="font-semibold">Respuestas:</h4>
                  <ul className="list-disc list-inside">
                    {Object.entries(actividad.respuestas).map(([izquierda, derecha], index) => (
                      <li key={index}>
                        {String(izquierda)} → {String(derecha)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {tipo === "test" && actividad.enunciado && (
            <div className="mt-2">
              <p>{actividad.enunciado}</p>
              {actividad.opciones?.map((opcion, index) => (
                <button key={index} className="block mt-2 p-2 border w-full text-left">
                  {opcion}
                </button>
              ))}
              {actividad.respuesta && (
                <div className="mt-2 text-green-600 font-semibold">
                  Respuesta correcta: {actividad.respuesta}
                </div>
              )}
            </div>
          )}

          {tipo === "huecos" && actividad.texto && (
            <div className="mt-2">
              <p>{actividad.texto.replace("__", "[_____]")}</p>
              {actividad.respuesta && (
                <div className="mt-2 text-green-600 font-semibold">
                  Respuesta: {actividad.respuesta}
                </div>
              )}
            </div>
          )}

        {!actividadAceptada && (
            <div className="botones-container">
              <button
                className="boton-generar"
                onClick={rechazarActividad}
              >
                Rechazar
              </button>

              <button className="boton-generar" onClick={aceptarActividad}>Aceptar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}