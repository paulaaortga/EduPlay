import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Alumno.css"; 

export default function RegistroAlumno() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [curso, setCurso] = useState("");

  const navigate = useNavigate();

  const crearUsuario = async () => {
    try {
      const response = await axios.post("http://localhost:3001/alumno", {
        nombre,
        apellidos,
        curso
      });
      console.log("Usuario creado:", response.data);
      setNombre("");
      setApellidos("");
      setCurso("");
      navigate("/asignaturas");
    } catch (error) {
      console.error("Error creando usuario", error);
      alert("Hubo un error al crear el usuario");
    }
  };

  return (
    <div className="registro-container">
    
      

      {/* Formulario sin tabla */}
      <div className="form-container">
      <h2 className="registro-title">Registrarse</h2>
        <div className="form-field">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Introduce tu nombre"
            className="form-input"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="apellidos" className="form-label">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Introduce tus apellidos"
            className="form-input"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="curso" className="form-label">Curso</label>
          <input
            type="text"
            id="curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            placeholder="Introduce tu curso"
            className="form-input"
          />
        </div>

      <div className="botones-container">
        <button className="boton-crear" onClick={crearUsuario}>
          Crear Usuario
        </button>
      </div>
    </div>
    </div>
  );
}