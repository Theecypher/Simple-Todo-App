import { useState } from "react";

const AddTodo = ({ item, index, handleDelete, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(!editing);
  };

  // let viewMode = {}
  // let editMode = {}

  // if (editing) {
  //     viewMode.display = "none";
  // }
  // else {
  //     editMode.display = "none";
  // }

  // style={editMode}
  // onChange={(e) => console.log(e.target.value, item.index)}

  return (
    <div>
      <li>
        <input
          disabled={!editing}
          className="todo"
          onChange={(e) => setUpdate(e.target.value, index)}
          value={item}
          /* <input  value={ item } */
        />
        <button onClick={() => handleDelete(item)} className="deletebtn">
          Delete
        </button>
        <button onClick={handleEditing} className="editbtn">
          {editing ? "save" : "edit"}
        </button>
      </li>
    </div>
  );
};

export default AddTodo;
