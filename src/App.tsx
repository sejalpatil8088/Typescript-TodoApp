import React, { useState } from 'react';
import { Todo } from './model';
import TodoList from './Components/TodoList';

import './App.css';
import InputField from './Components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);  
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <span className='text-center font-bold text-2xl z-10'>TODO App</span>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}  />
    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import { Todo } from './model';
// import TodoList from './Components/TodoList';

// import './App.css';
// import InputField from './Components/InputField';

// const App: React.FC = ()  => {
//   const [todo , setTodo] = useState<string>("");
//   const [todos , setTodos] = useState<Array<Todo[]>>([]);
//   const [completedTodos , setCompletedTodos] = useState<Array<Todo>>([]);

//   const handleAdd = (e: React.FormEvent) => {
//       e.preventDefault();

//       if(todo) {
//         setTodos([...todos , { id: Date.now() , todo, isDone: false}]);
//         setTodo("");
//       }
//   }
//   return (
//     <>
//       <div className=" flex justify-center mt-5 ">
//       <span className='text-center font-bold text-2xl z-10'>TODO App</span>
     
//       </div>
//       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
//       <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}  />
//     </>

//   );
// }

// export default App;
