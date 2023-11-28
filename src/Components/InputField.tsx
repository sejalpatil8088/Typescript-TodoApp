import React, { useState , useRef } from 'react'

interface Props{
    todo : string,
    setTodo :  React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent) => void

}

const InputField:React.FC<Props> = ({ todo , setTodo , handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    
  return (
    <div>
        <form onSubmit={(e) => {handleAdd(e)
           inputRef.current?.blur();
        }} className='flex justify-center mt-7  gap-4 '>
           <input  ref={inputRef} type='input' placeholder='Enter a task' value={todo} onChange={(e) => setTodo(e.target.value)}    className='px-20 py-2 border border-spacing-2 rounded-lg bg-blue-200' />
           <button  className='absolute mr-0 ml-72 pr-4 pl-4 text-center font-bold text-xl border border-spacing-4 pt-2 rounded-2xl pb-1   bg-white ' type='submit'>Go</button>
        </form>

    </div>
  )
}

export default InputField;
