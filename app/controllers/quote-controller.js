import QuoteService from "../services/quote-service.js";
import Quote from "../models/quote.js";
import store from "../store.js";

function drawQuote() {
  let q = store.State.quote;
  document.getElementById("quote").innerHTML = q.Template;

  console.log("The Quote man says", store.State.quote);
}

export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote);
    QuoteService.getQuote();
    console.log("Hello from the quote constructor");
  }
}
