const todoHolder = document.querySelector("#todoHolder");
const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInput");

let id = 0;

const deleteTodo = (e) => {
  e.target.closest("li").style.textDecoration = "line-through";
};

const createTodo = (text) => {
  const newLi = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.addEventListener("click", deleteTodo);

  newLi.innerText = `${id}. ${text}`;
  newLi.appendChild(deleteButton);
  newLi.id = id;
  id++;
  return newLi;
};

const addTodo = () => {
  const inputValue = addTodoInput.value;

  if (!inputValue) return;

  const todo = createTodo(inputValue);
  todoHolder.appendChild(todo);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  addTodo();
  addTodoForm.reset();
};

addTodoForm.addEventListener("submit", onFormSubmit);
