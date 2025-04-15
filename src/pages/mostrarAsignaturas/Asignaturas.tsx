import "./Asignaturas.css";

export default function SeleccionAsignatura() {
  const asignaturas = [
    { nombre: "Matemáticas", ruta: "/matematicas" },
    { nombre: "Lengua", ruta: "lengua" },
    { nombre: "Conocimiento del Medio", ruta: "/conocimiento" },
    { nombre: "Inglés", ruta: "/ingles" },
  ];

  return (
    <div className="seleccion-container">
      <h2 className="titulo">Tus Asignaturas</h2>
      <div className="grid-asignaturas">
        {asignaturas.map((asig) => (
          <a
            key={asig.nombre}
            href={asig.ruta}
            className="card-asignatura"
            rel="noopener noreferrer"
          >
            {asig.nombre}
          </a>
        ))}
      </div>
    </div>
  );
}