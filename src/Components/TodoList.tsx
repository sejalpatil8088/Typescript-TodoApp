import React from 'react';
import SingleTodo from './SingleTodo';
import { Todo } from '../model';
import { Dispatch, SetStateAction } from 'react';

interface TodoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='flex justify-center flex-row '>
      {todos.map((todo, index) => (
        <SingleTodo
          key={todo.id}
          index={index} // Add the index prop here
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;


// import React from 'react';
// import { Todo } from '../model';
// import SingleTodo from './SingleTodo';

// interface Props{
//    todos: Todo[],
//    setTodos :  React.Dispatch<React.SetStateAction<Todo[]>>;
//    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
//    completedTodos: Todo[]

// }
// const TodoList: React.FC<Props> = ({todos , setTodos  }: Props) => {
//   return (
//     <div className=''>
//       {todos.map((todo) => (
//         <SingleTodo 
          
//           todo={todo}
//            key={todo.id} 
//           todos={todos}
//           setTodos={setTodos}
//         />
//       ))}
     
//     </div>
//   )
// }

// export default TodoList;