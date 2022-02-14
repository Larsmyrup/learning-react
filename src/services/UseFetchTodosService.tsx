import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Todo } from '../types/Todo';

const useFetchTodosService = () => {
  const [result, setResult] = useState<Service<Todo[]>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(response => {
        setResult({ status: 'loaded', payload: response })
      })
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useFetchTodosService;
