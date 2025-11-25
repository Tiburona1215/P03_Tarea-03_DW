const readProducts = require("./src/read");
const createProduct = require("./src/create");
const updateProduct = require("./src/Update");
const deleteProduct = require("./src/Delete");

const option = process.argv[2];

switch (option) {
    case "read":
        console.log(readProducts());
        break;

    case "create":
        const newProduct = {
            id: process.argv[3],
            name: process.argv[4],
            price: Number(process.argv[5])
        };
        createProduct(newProduct);
        break;

    case "update":
        updateProduct(process.argv[3], process.argv[4], process.argv[5]);
        break;

    case "delete":
        deleteProduct(process.argv[3]);
        break;

    default:
        console.log("Comandos disponibles: read, create, update, delete");
}
