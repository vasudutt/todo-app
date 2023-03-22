import { Task } from '../../interfaces';

type Props = {
  task: Task;
  completeTask: Function;
  removeTask: Function;
};

function TaskItem({ task, completeTask, removeTask }: Props) {
  return (
    <div
      className="my-4 py-2 px-4 flex justify-between items-center bg-neutral rounded-lg"
      key={task.id}
    >
      <p
        className={`text-lg ${
          task.status === 'complete' ? 'line-through' : ''
        }`}
      >
        {task.title}
      </p>

      <div className="flex gap-4">
        <button
          className="btn btn-secondary"
          onClick={() => {
            completeTask(task.id);
          }}
        >
          {task.status === 'complete' ? 'Undo' : 'Complete'}
        </button>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => {
            removeTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
