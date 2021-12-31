import { useGlobal } from "./dependencies/TasksContext";
import { BiTask } from "react-icons/bi";
import TasksList from "./dependencies/TasksList";

const Tasks = () => {
  const { name, setName, handleSubmit, reference } = useGlobal();

  return (
    <section className='tasks'>
      <form className='tasks__field' onSubmit={handleSubmit}>
        <input
          type='text'
          className='tasks__txt'
          placeholder='create your tasks e.g. tomatoes'
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={reference}
        />
        <button type='submit' className='tasks__btn' onClick={handleSubmit}>
          <BiTask />
        </button>
      </form>
      <input type='checkbox' className='tasks__toggle switch' />
      <span className='clear-fix'></span>
      <ul className='tasks__list'>
        <TasksList />
      </ul>
    </section>
  );
};

export default Tasks;
