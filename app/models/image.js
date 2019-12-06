export default class Image {
  constructor(data) {
    console.log("[RAW Image API DATA]", data);

    this.url = data.url;
  }

  get Template() {
    return `
   url('${this.url}')
   `;
  }
}
