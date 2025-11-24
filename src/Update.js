const fs = require("fs");
function updateProduct(id, newData) {
  const data = JSON.parse(fs.readFileSync("./data/products.json"));
  const index = data.findIndex(p => p.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...newData };
    fs.writeFileSync("./data/products.json", JSON.stringify(data, null, 2));
  }
}
module.exports = updateProduct;
