import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetchTodosService from "../services/UseFetchTodosService";
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'

const Todos: React.FC = () => {
  const fetchTodosService = useFetchTodosService();

  return (
    <div
    className="mt-5"
    >
      {fetchTodosService.status === 'loading' && <div>Loading...</div>}
      {fetchTodosService.status === 'loaded' &&
      fetchTodosService.payload.map(todo => (
        <div
          className="px-5"
          key={`${todo.id}`}
        >
          <div
            className="flex items-center justify-between"
          >
            <div
              className="mr-2"
            >{todo.title}</div>
            <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} />
          </div>
          <div
            className="my-2"
          >
            <div
              className="border-b border-gray-400"
            />
          </div>
        </div>
      ))
      }
      {fetchTodosService.status === 'error' && <div>Error, the backend moved to the dark side.</div>}
    </div>
  );
}

export default Todos;
