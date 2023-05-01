const Tarea = ({
  borrarTarea,
  actualizarEstado,
  actualizarPrioridad,
  tarea,
}) => {
  const { id, title, description, prioridad, state } = tarea;

  const stateStyle = `${state && "text-decoration-line-through"}`;

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={stateStyle}>{title}</h5>
          <p className={stateStyle}>{description}</p>
          <div className="d-flex gap-2">
            <button
              onClick={() => borrarTarea(id)}
              className="btn btn-sm btn-danger text-dark border"
            >
              Eliminar
            </button>
            <button
              onClick={() => actualizarEstado(id)}
              className="btn btn-sm btn-warning"
            >
              Actualizar Estado
            </button>
            <button
              onClick={() => actualizarPrioridad(id)}
              className="btn btn-sm btn-bg-dark border-black"
            >
              {prioridad ? "Ya no es prioridad" : "Cambiar a prioritaria"}
            </button>
          </div>
        </div>
        <span className="badge text-bg-danger fs-6 border border-2 border-dark">
          {prioridad && "Urgente"}
        </span>
      </div>
    </li>
  );
};

export default Tarea;
