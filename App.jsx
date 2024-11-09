import ProductManagement from "./ProductManagement.jsx";
import Dashboard from "./Dashboard.jsx";
import Router from "./Router.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => console.error("Error fetching products", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard products={products} />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;