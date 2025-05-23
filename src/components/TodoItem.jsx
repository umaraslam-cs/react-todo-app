export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="flex items-center justify-between p-2 border rounded">
        <div
          onClick={() => onToggle(todo.id)}
          className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        >
          {todo.text}
        </div>
        <button onClick={() => onDelete(todo.id)} className="text-red-500 ml-4">
          ✕
        </button>
      </div>
    );
  }
  