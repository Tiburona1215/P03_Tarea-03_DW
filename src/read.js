const fs = require("fs");
function readProducts() {
  return JSON.parse(fs.readFileSync("./data/products.json"));
}
module.exports = readProducts;
