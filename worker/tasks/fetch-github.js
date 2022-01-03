var fetch = require("node-fetch");

const baseURL = "https://apigoeshere";

async function fetchApi() {
  const res = await fetch(baseURL);
  const inventory = await res.json();
}

module.exports = fetchApi;
