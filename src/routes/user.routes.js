const { Router } = require("express");
const router = Router();

const {
    renderProductsForm,
    createNewProducts,
    renderProducts,
    renderEditProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/user.controllers");

router.get("/products/add", renderProductsForm);
router.post("/products/add", createNewProducts);
router.get("/products", renderProducts);
router.get("/products/edit/:id", renderEditProduct);
router.put("/products/edit/:id", updateProduct);
router.delete("/products/delete/:id", deleteProduct);
module.exports = router;
