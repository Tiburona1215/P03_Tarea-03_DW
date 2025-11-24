const fs = require("fs");
function createProduct(product) {
  const data = JSON.parse(fs.readFileSync("./data/products.json"));
  data.push(product);
  fs.writeFileSync("./data/products.json", JSON.stringify(data, null, 2));
}
module.exports = createProduct;
