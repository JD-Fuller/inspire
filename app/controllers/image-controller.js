import ImageService from "../services/image-service.js";
import Image from "../models/image.js";
import store from "../store.js";

function drawImage() {
  let i = store.State.image;
  document.body.style.background = i.Template;
  console.log("The image man says", store.State.image);
}

export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage);
    ImageService.getImage();
    console.log("Hello from the image controller");
  }
}
