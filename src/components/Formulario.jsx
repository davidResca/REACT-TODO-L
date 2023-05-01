import { useState } from "react";
import Swal from "sweetalert2";

// FORMULARIOS CONTROLADOS.

const Formulario = ({crearTarea}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    state: "Pendiente",
    prioridad: true,
  });

  const {title, description, state, prioridad} = task;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !description.trim()){
      return Swal.fire({
        icon: 'error',
        title: 'Gilipollas!',
        text: 'Escribe en los malditos campos!',
      })
    }

    crearTarea({
      id: Date.now(),
      title: title,
      description: description,
      prioridad: prioridad,
      state: state === 'realizado',
    })
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTask({...task, [name] : type === "checkbox" ? checked : value });
  };

  return (
    <div>
      <h1 className="mb-2 text-warning">FORMULARIO CONTROLADO</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          value={title}
          type="text"
          placeholder="Ingrese tarea"
          className="form-control mb-2 w-75"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={description}
          className="form-control mb-2 w-75"
          placeholder="Ingrese texto"
        ></textarea>
        <select
          name="state"
          onChange={handleChange}
          value={state}
          className="form-select mb-2 w-75"
        >
          <option value="pendiente">Pendiente</option>
          <option value="realizado">Realizado</option>
        </select>
        <div className="d-flex align-items-center mb-2">
          <label htmlFor="check-input">Dar prioridad</label>
          <input
            name="prioridad"
            onChange={handleChange}
            checked={prioridad}
            type="checkbox"
            id="check-input"
            className="form-check-input"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
