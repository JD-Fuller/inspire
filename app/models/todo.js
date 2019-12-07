export default class Todo {
  constructor(data) {
    console.log("[RAW To-Do API DATA]", data);

    this.description = data.description;
    this.user = data.user;
    this._id = data._id;
    this.completed = data.completed;
  }

  get Template() {
    return `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${this.description}</h5>
              <h6 class="card-subtitle">${this._id}</h6>
          </div>
        </div>

        <div class="col-3 mt-3 p-3 border rounded bg-light tasks" style="margin: 1em;">
            <h1 class="text-left border-bottom" id="name">${this.user}<button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${this._id}')">X</button></h1>
            
           
            <form style="margin-bottom: 1em;" onsubmit="app.listController.createTask(event,'${this._id}')">
            <div class="input-group mb-3">
                    <input id="task" type="text" class="form-control" placeholder="Add Task" aria-label="task" aria-describedby="task-addon">
                    <div class="input-group-append">
                     <button  class="btn btn-outline-secondary" type="submit">+</button>
                    </div>
                </div>
            </form>
    </div>






    `;
  }
}
