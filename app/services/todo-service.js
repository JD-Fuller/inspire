import Todo from "../models/todo.js";
import store from "../store.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jdfuller/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
    console.log("hello from the todo-service");
    this.addTodoAsync();
  }
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    let results = res.data.data.map(todoData => new Todo(todoData));
    store.commit("todos", results);
    console.log("here is the new todos with results", results);
    console.log("this is from my getTodos", store.State.todos);
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    this.getTodos();
  }

  async toggleTodoStatus(todoId) {
    let todo = store.State.todos;
    let newItem = todo.find(item => item._id == todoId);
    console.log("here is the todo from the search", newItem);
    console.log("newItem.completed printout", newItem.completed);
    if (newItem.completed == false) {
      let res = await todoApi.put(todoId, { completed: true });
      // store.commit("todos", res.data.data);
      console.log("new item is now true");
    } else {
      let res = await todoApi.put(todoId, { completed: false });
      // store.commit("todos", res.data.data);
      console.log("new Item is now false");
    }
    this.getTodos();
    // console.log("here is the new item completed status", newItem.completed);
    // if (todo. == false) {
    //   todoApi.put(todoId, { completed: true }).then(res => {
    //     console.log("completed task", res);
    //   });
    // } else {
    //   todoApi.put(todoId, { completed: false }).then(res => {
    //     console.log("incomplete task", res);
    //   });
    //   this.getTodos();
    // }
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let todo = store.State.todos;
    let removeItem = todo.find(item => item._id == todoId);
    console.log("remove from the service", removeItem);
    let res = await todoApi.delete(removeItem);
    store.commit("todos", res.data.data);
  }
}

const todoService = new TodoService();
export default todoService;
