import { useEffect, useState } from 'react';
import { Task } from './interfaces';

import Greeting from './components/Greeting';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const data = localStorage.getItem('tasks');
    if (data !== null) return JSON.parse(data);
    else return [];
  });

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const completeTask = (id: string) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id)
          return {
            ...task,
            status:
              task.status === 'complete' ? 'incomplete' : 'complete',
          };
        return task;
      });
    });
  };

  const removeTask = (id: string) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="my-8 mx-auto px-4 max-w-6xl">
      <Greeting />
      <Input addTask={addTask} />
      <div className="divider"></div>
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
