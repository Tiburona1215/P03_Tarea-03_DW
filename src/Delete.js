const fs = require("fs");
function deleteProduct(id) {
  const data = JSON.parse(fs.readFileSync("./data/products.json"));
  const filtered = data.filter(p => p.id !== id);
  fs.writeFileSync("./data/products.json", JSON.stringify(filtered, null, 2));
}
module.exports = deleteProduct;
