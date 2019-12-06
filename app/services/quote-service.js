import Quote from "../models/quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});
class QuoteService {
  async getQuote() {
    console.log("Calling the Quote-man");
    let res = await _quoteApi.get();
    store.commit("quote", new Quote(res.data.quote));
  }
}

const quoteService = new QuoteService();
export default quoteService;
