import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../interfaces';

type Props = {
  addTask: Function;
};

function Input({ addTask }: Props) {
  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    title: '',
    status: 'incomplete',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mt-4 mx-auto max-w-fit input-group">
      <input
        className="w-[450px] px-4"
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
      />

      <button
        className="btn btn-secondary"
        onClick={() => {
          addTask(task);
          setTask({
            id: uuidv4(),
            title: '',
            status: 'incomplete',
          });
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default Input;
