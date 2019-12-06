export default class Quote {
  constructor(data) {
    console.log("[RAW QUOTE API DATA]", data);

    this.author = data.author;
    this.body = data.body;
  }

  get Template() {
    return `
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${this.author}</h5>
              <h6 class="card-subtitle">${this.body}</h6>
          </div>
        </div>
    `;
  }
}
