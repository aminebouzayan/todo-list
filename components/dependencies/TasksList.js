import { useGlobal } from "./TasksContext";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";

const TasksList = () => {
  const { list, content, handleDelete, handleCheck } = useGlobal();
  return (
    <>
      {content ||
        list.map((item) => {
          const { id, text, checked } = item;
          return (
            <li key={id}>
              <p className={`${checked === true ? `completed` : ``}`}>{text}</p>
              <button>
                <FaTrash onClick={() => handleDelete(id)} />
              </button>
              <button>
                <RiEdit2Fill />
              </button>
              <button>
                <GiCheckMark onClick={() => handleCheck(id)} />
              </button>
            </li>
          );
        })}
    </>
  );
};
export default TasksList;
