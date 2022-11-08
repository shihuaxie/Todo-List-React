import { nanoid } from "nanoid";
import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //here I can write js and functions
  const inputTextHandler = (e) => {
    // console.log(e.target.value); //this is what users type in the input
    setInputText(e.target.value); //update the input text to state
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: nanoid() }]);
    //when we update our input text to state, then reset the inputText to empty
    setInputText("");
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
