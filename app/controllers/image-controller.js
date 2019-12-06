import ImageService from "../services/image-service.js";
import Image from "../models/image.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function drawImage() {
  let i = store.State.image;
  document.getElementById("image").innerHTML = i.Template;

  console.log("The image man says", store.State.image);
}

export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage);
    ImageService.getImageAsync();
    console.log("Hello from the image controller");
  }
}
