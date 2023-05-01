import Tarea from "./tareaComponent/Tarea";

const Tareas = ({
  borrarTarea,
  actualizarEstado,
  actualizarPrioridad,
  tareas,
}) => {

  console.log(tareas);

  return (
    <div>
      <h2 className="text-center">Tareas</h2>
      <ul className="list-group">
        {tareas.map((tarea) => (
          <Tarea
          tarea={tarea}
          borrarTarea={borrarTarea}
          actualizarEstado={actualizarEstado}
          actualizarPrioridad={actualizarPrioridad}
          key={tarea.id}
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
