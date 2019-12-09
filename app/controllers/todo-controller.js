import store from "../store.js";
import Todo from "../models/todo.js";
import TodoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  // let template = "";
  // let list = store.State.todos;
  // console.log("This is my store stuff", list);
  // debugger;
  // console.log("just before sending to template", template);
  // list.forEach(
  //   item =>
  //     (template += `
  //     <dl>
  //       <form>
  //       <input style="margin-bottom: 1em;" type="checkbox" onsubmit="app.todoController.toggleTodoStatus(event,'${item._id}')">${item.description}</input><button onclick="app.todoController.removeTodoAsync('${item._id}')">x</button>
  //       </form>
  //     </dl>
  //     `)
  // );
  // console.log("just after sending to template", template);
  // document.getElementById("todos").innerHTML = template;

  let template = "";
  let list = store.State.todos;
  // list.forEach((item, i) => (template += item.Template(i)));
  list.forEach(item => new Todo((template += item.Template)));

  document.getElementById("todos").innerHTML = template;

  // let list = store.State.todos;
  // debugger;

  // document.getElementById("todos").innerHTML = list.todoTemplate
}
function _countTasks() {
  let sum = store.State.tasks;
  let list = store.State.todos.length + 1;
  sum = list.toString();
  store.commit("tasks", sum);

  let tSum = `<h3>${this.sum}</h3>`;

  document.getElementById("task-sum").innerHTML = tSum;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    // store.subscribe("tasks", _countTasks);
    TodoService.removeTodoAsync();
    TodoService.toggleTodoStatusAsync();
    TodoService.getTodos();
    TodoService.addTodoAsync();
  }

  async addTodoAsync(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.todo.value
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatusAsync(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodoAsync(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
      console.log("remove from the list", todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
    _drawTodos();
  }
}
