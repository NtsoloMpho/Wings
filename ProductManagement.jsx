function ProductManagement() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/products", {
        name,
        description,
        category,
        price,
        stock_quantity: stockQuantity
      })
      .then(response => alert("Product added!"))
      .catch(err => console.error("Error adding product", err));
    };
  
    return (
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Product Name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Price"
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Stock Quantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)} 
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
  
  export default ProductManagement