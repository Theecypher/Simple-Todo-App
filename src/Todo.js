import { useState } from "react";
import AddTodo from "./AddTask";

const Todo = () => {
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const input = form.item;
    const newItems = [...values, input.value];
    setValues(newItems);
    form.reset();

    console.log(values);
  };

  const handleDelete = (todoToRemove) => {
    const newItems = values.filter((value) => {
      return value !== todoToRemove;
    });
    setValues(newItems);
  };

  const setUpdate = (updateTodo, id) => {
    setValues(
      values.map((value, index) => {
        if (index === id) {
          value = updateTodo;
        }
        // return value;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="item" type="text" />
        <input type="submit" />
      </form>

      <div className="tasks">
        <ul>
          {values.map((item, index) => (
            <AddTodo
              edit={edit}
              index={index}
              key={item + index}
              item={item}
              handleDelete={() => handleDelete(item)}
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
