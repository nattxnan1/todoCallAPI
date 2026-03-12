"use client";
import { useEffect, useState } from "react";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Page() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (!text) return;

    const newTodo: TodoItem = {
      userId: 1,
      id: Date.now(),
      title: text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="bg-blue-600 p-6 rounded-xl w-[500px]">

        <div className="flex mb-4">
          <input
            className="flex-1 p-2 rounded-l-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Todo..."
          />

          <button
            className="bg-yellow-400 px-4 rounded-r-lg"
            onClick={addTodo}
          >
            AddTodo
          </button>
        </div>

        <div className="bg-orange-200 p-4 rounded-lg h-80 overflow-y-scroll">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>• {todo.title}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}