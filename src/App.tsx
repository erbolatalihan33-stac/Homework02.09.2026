import ProductCard from './Companents/ProductCard/productcard';
import ProductCard2 from './Companents/ProductCard2/productcard2';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <ProductCard />
      <ProductCard2 />
    </div>
  );
}

export default App;