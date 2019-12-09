export default class Todo {
  constructor(data) {
    console.log("[RAW To-Do API DATA]", data);
    this.completed = data.completed;
    this.description = data.description;
    console.log("this is my data.description", data.description);
    // this.user = data.user;
    this._id = data._id;
    console.log("this is my data._id", data._id);
  }

  get Template() {
    let template = `
        <div class="card">
            <div class="card-body">
            <input style="margin-bottom: 1em;" type="checkbox" onclick="app.todoController.toggleTodoStatusAsync('${this._id}')">
            `;
    if (this.completed) {
      template += `<del><em>${this.description}</em></del></input><button onclick="app.todoController.removeTodoAsync('${this._id}')">x</button>`;
    } else {
      template += `${this.description}</input><button onclick="app.todoController.removeTodoAsync('${this._id}')">x</button>`;
    }
    template += `</div>`;
    return template;
  }
}
