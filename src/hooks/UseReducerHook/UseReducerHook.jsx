import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.value,
        },
      ];
    case "delete":
      return state.filter((student) => student.id !== action.id);
    default:
      return state;
  }
};

const initialState = [
  {
    id: 1,
    name: "John Doe",
  },
];

const UseReducerHook = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ul>
        {state.map((student, key) => (
          <li key={key}>
            {student.id} . {student.name}
            <button
              onClick={() => dispatch({ type: "delete", id: student.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", value: name });
        }}
      >
        Add
      </button>
    </>
  );
};

export default UseReducerHook;
