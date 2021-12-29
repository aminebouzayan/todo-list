import React from "react";
import { BiTask } from "react-icons/bi";

const Tasks = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='tasks'>
      <form className='tasks__field' onSubmit={handleSubmit}>
        <input
          type='text'
          className='tasks__txt'
          placeholder='create your tasks e.g. tomatoes'
        />
        <button type='submit' className='tasks__btn' onClick={handleSubmit}>
          <BiTask />
        </button>
      </form>
      <input type='checkbox' className='tasks__toggle switch' />
      <span className='clear-fix'></span>
      <ul className='tasks__list'>
        <li>
          <button>-</button>
          <p>mmmmmmmmmmmmmmm</p>
          <button>+</button>
        </li>
        <li>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</li>
        <li>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</li>
        <li>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</li>
        <li>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</li>
      </ul>
    </section>
  );
};

export default Tasks;
