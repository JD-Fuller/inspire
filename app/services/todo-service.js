import Todo from "../models/todo.js";
import store from "../store.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jdfuller/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    debugger;
    let results = res.data.data.map(todoData => new Todo(todoData));
    // store.commit("todos", new Todo(res.data));
    store.commit("todos", results);
    console.log("here is the new todos with results", results);
    console.log("this is from my getTodos", store.State.todos);
  }

  //TODO Handle this response from the server

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    this.getTodos();

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatus(todoId) {
    debugger;

    let todo = store.State.todos.find(t => t._id == todoId);

    if (todo.completed == false) {
      todoApi.put(todoId, { completed: true }).then(res => {
        console.log("completed task", res);
      });
    } else {
      todoApi.put(todoId, { completed: false }).then(res => {
        console.log("incomplete task", res);
      });
      this.getTodos();
    }

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let todo = store.State.todos.find(t => t.i_id == todoId);
    debugger;

    let res = await todoApi.delete(todo);
    debugger;
    store.commit("todos", res.data.data);
    console.log("remove from the service", todo);
  }
}

const todoService = new TodoService();
export default todoService;
