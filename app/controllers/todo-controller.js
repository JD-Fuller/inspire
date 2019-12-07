import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/todo.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let list = store.State.todos;
  console.log("This is my store stuff", store.State.todos);

  list.forEach(s => (template += s.Template));

  document.getElementById("todos").innerHTML = list.Template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos);
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      id: e.id,
      description: e.description,
      completed: e.completed
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
