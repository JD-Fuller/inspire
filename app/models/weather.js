export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = Math.floor(data.main.temp - 273.15) * (9 / 5) + 32 + "F";
  }

  get Template() {
    return `
        <div class="card" style="width: 10rem;">
            <div class="card-body">
              <h5 class="card-title">${this.city}</h5>
              <h6 class="card-subtitle">${this.kelvin}</h6>
          </div>
        </div>
    `;
  }
}
