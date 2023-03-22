import { useEffect, useState } from 'react';
import { Task } from '../../interfaces';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  completeTask: Function;
  removeTask: Function;
};

function TaskList({ tasks, completeTask, removeTask }: Props) {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Done'>(
    'All'
  );
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const filterHandler = () => {
    switch (filter) {
      case 'All':
        setFilteredTasks(tasks);
        break;
      case 'Active':
        setFilteredTasks(
          tasks.filter((task) => task.status === 'incomplete')
        );
        break;
      case 'Done':
        setFilteredTasks(
          tasks.filter((task) => task.status === 'complete')
        );
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [filter, tasks]);

  return (
    <div>
      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <h1 className="text-2xl font-thin tracking-widest">Tasks</h1>
        <div className="flex justify-between gap-2">
          <button
            className={`btn btn-outline btn-accent ${
              filter === 'All' ? 'btn-active' : ''
            }`}
            onClick={() => {
              setFilter('All');
            }}
          >
            All
          </button>
          <button
            className={`btn btn-outline btn-accent ${
              filter === 'Active' ? 'btn-active' : ''
            }`}
            onClick={() => {
              setFilter('Active');
            }}
          >
            Active
          </button>
          <button
            className={`btn btn-outline btn-accent ${
              filter === 'Done' ? 'btn-active' : ''
            }`}
            onClick={() => {
              setFilter('Done');
            }}
          >
            Done
          </button>
        </div>
      </div>

      {filteredTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
