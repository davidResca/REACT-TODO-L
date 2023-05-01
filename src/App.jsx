import React, { useEffect,useState } from 'react'
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";

const arrayTareas = JSON.parse(localStorage.getItem('tareas')) || [];

const App = () => {
  const [tareas, setTareas] = useState(arrayTareas);

  useEffect( ()=> {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    console.log('useEffect');
  }, [tareas])

  //CRUD
  const crearTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };
  const actualizarEstado = (id) => {
    const nuevoArray = tareas.map((t) => {
      t.id === id && (t.state = !t.state);
      return t;
    });
    setTareas(nuevoArray);
  };
  const actualizarPrioridad = id => {
    const nuevoArray = tareas.map( t => {
      t.id === id && (t.prioridad = !t.prioridad);
      return t;
    })
    setTareas(nuevoArray);
  }
  const borrarTarea = (id) => {
    const nuevoArray = tareas.filter((t) => t.id !== id);
    setTareas(nuevoArray);
  };
  //ORDER
  const ordenarTareas = (arrayTasks) => {
    return arrayTasks.sort((a, b) => {
      if (a.prioridad === b.prioridad) return 0;
      if (a.prioridad) return -1;
      if (!a.prioridad) return 1;
    });
  };

  return (
    <div className="container mb-2 p-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario crearTarea={crearTarea} />
      <Tareas
        tareas={ordenarTareas(tareas)}
        borrarTarea={borrarTarea}
        actualizarEstado={actualizarEstado}
        actualizarPrioridad={actualizarPrioridad}
      />
    </div>
  );
};

export default App;
