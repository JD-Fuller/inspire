export default class Todo {
  constructor(data) {
    console.log("[RAW To-Do API DATA]", data);
    this.description = data.description;
    // this.user = data.user;
    this._id = data._id;
    // this.completed = data.completed;
    // this.__v = data.__v;
  }

  get Template() {
    return `
        <div class="card">
            <div class="card-body">
            <form
          style="margin-bottom: 1em;"
          onsubmit="app.todoController.toggleTodoStatus(event,'${this._id}')">
              <h5 class="card-title">${this.description}</h5>
              <h6 class="card-subtitle">${this._id}</h6>
          </div>
        </div>
    `;
  }
}
