import React, { useState, useRef } from 'react';
import { Todo } from '../model';
import { MdEdit, MdDelete, MdFileDownloadDone } from 'react-icons/md';
import TodoList from './TodoList';

const SingleTodo: React.FC<{
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className={`flex mt-4 items-center justify-between px-20 rounded-xl py-2  border-gray-300 ${
        edit ? 'bg-pink-400' : ''
      }`}
    >
      {edit ? (
        <input
          className='flex-1 p-2 mr-2  bg-blue-100 ' 
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <span className={`flex-1  ${todo.isDone ? 'line-through text-gray-500' : ''}`}>
          {todo.todo}
        </span>
      )}

      <div className='flex items-center'>
        <span
          className='cursor-pointer mr-2 text-blue-500'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
              inputRef.current?.focus();
            }
          }}
        >
          <MdEdit />
        </span>
        <span
          className='cursor-pointer mr-2 text-red-500'
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </span>
        <span
          className='cursor-pointer text-green-500'
          onClick={() => handleDone(todo.id)}
        >
          <MdFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;


// import React, { useState } from 'react';
// import { Todo } from '../model';
// import { MdEdit, MdDelete, MdFileDownloadDone } from 'react-icons/md';
// import TodoList from './TodoList';
// import { useRef } from 'react';

// const SingleTodo: React.FC<{
//   index: number;
//   todo: Todo;
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }> = ({ index, todo, todos, setTodos }) => {
//   const [edit, setEdit] = useState<boolean>(false);
//   const [editTodo, setEditTodo] = useState<string>(todo.todo);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleEdit = (e: React.FormEvent, id: number) => {
//     e.preventDefault();
//     setTodos(
//       todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t))
//     );
//     setEdit(false);
//   };

//   const handleDelete = (id: number) => {
//     setTodos(todos.filter((t) => t.id !== id));
//   };

//   const handleDone = (id: number) => {
//     setTodos(
//       todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
//     );
//   };

//   return (
//     <form onSubmit={(e) => handleEdit(e, todo.id)} className='px-20 mt-4 absolute border-spacing-2'>
//       {edit ? (
//         <input
//           className='border-2 mt-6 px-20 bg-black text-white'
//           value={editTodo}
//           onChange={(e) => setEditTodo(e.target.value)}
//           ref={inputRef}
//         />
//       ) : (
//         <span>{todo.todo}</span>
//       )}

//       <div className='flex absolute '>
//         <span
//           className=''
//           onClick={() => {
//             if (!edit && !todo.isDone) {
//               setEdit(!edit);
//               inputRef.current?.focus();
//             }
//           }}
//         >
//           <MdEdit />
//         </span>
//         <span className='icon' onClick={() => handleDelete(todo.id)}>
//           <MdDelete />
//         </span>
//         <span className='icon' onClick={() => handleDone(todo.id)}>
//           <MdFileDownloadDone />
//         </span>
//       </div>
//     </form>
//   );
// };

// export default SingleTodo;



