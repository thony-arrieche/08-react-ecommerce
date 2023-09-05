import { useEffect, useState } from 'react';
import Butter from 'buttercms';

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await butter.content.retrieve(["keyboards"], {
        order: "name",
      });
      const { data } = await res.data;
      const allProducts = data.keyboards;
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div>
          <img src={product.image} alt={`${product.name}`} />
          {product.name}
          {product.price}
          {product.description}
        </div>
      ))}
    </div>
  );
}

export default App;
