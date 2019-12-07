export default class Todo {
  constructor(data) {
    console.log("[RAW To-Do API DATA]", data);

    this.description = data.description;
    this.user = data.user;
    this._id = data._id;
  }

  get todoTemplate() {
    return `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${this.description}</h5>
              <h6 class="card-subtitle">${this._id}</h6>
          </div>
        </div>
    `;
  }
}
