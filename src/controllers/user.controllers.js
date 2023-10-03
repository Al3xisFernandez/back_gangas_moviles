const { use } = require("passport");

const userCtrl = {};

userCtrl.renderProductsForm = (req, res) => {
    res.send("render prodcuts form");
};
userCtrl.createNewProducts = (req, res) => {
    res.send("new products");
};

userCtrl.renderProducts = (req, res) => {
    res.send("all products");
};

userCtrl.renderEditProduct = (req, res) => {
    res.send("edit form");
};

userCtrl.updateProduct = (req, res) => {
    res.send("update product");
};

userCtrl.deleteProduct = (req, res) => {
    res.send("delete product");
};
 
module.exports = userCtrl;
