import Tarea from "./tareaComponent/Tarea";

const Tareas = ({
  tareas,
  borrarTarea,
  actualizarEstado,
  actualizarPrioridad,
  ordenarTareas,
}) => {
  return (
    <div>
      <h2 className="text-center">Tareas</h2>
      <ul className="list-group">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            borrarTarea={borrarTarea}
            actualizarEstado={actualizarEstado}
            actualizarPrioridad={actualizarPrioridad}
          />
        ))}
        {tareas.length === 0 && (
          <li className="list-group-item text-center">No hay Tareas</li>
        )}
      </ul>
    </div>
  );
};

export default Tareas;
