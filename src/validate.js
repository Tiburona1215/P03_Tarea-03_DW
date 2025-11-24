function validateProduct(product) {
  return product && product.id && product.name && product.price > 0;
}
module.exports = validateProduct;
