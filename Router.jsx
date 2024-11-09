const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
});

// Add new product
router.post("/", (req, res) => {
  const { name, description, category, price, stock_quantity } = req.body;
  const query = "INSERT INTO products (name, description, category, price, stock_quantity) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, description, category, price, stock_quantity], (err, results) => {
    if (err) return res.status(500).json({ message: "Error adding product" });
    res.json({ message: "Product added", id: results.insertId });
  });
});

// Update product
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, stock_quantity } = req.body;
  const query = "UPDATE products SET name = ?, description = ?, category = ?, price = ?, stock_quantity = ? WHERE id = ?";
  db.query(query, [name, description, category, price, stock_quantity, id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error updating product" });
    res.json({ message: "Product updated" });
  });
});

// Delete product
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM products WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Error deleting product" });
    res.json({ message: "Product deleted" });
  });
});

module.exports = router;