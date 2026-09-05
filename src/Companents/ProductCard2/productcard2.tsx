import './ProductCard2.css';

function ProductCard2() {
  return (
    <div className="product-card">
      <img 
        src="https://ozon.kz/category/hyperx-cloud2/=300" 
        alt="Игровые наушники" 
        className="product-image" 
      />
      <h2 className="product-title">Игровые наушники HyperX</h2>
      <p className="product-description">
        Качественный звук, мягкие амбушюры и удобный микрофон.
      </p>
      <div className="product-bottom">
        <span className="product-price">29 990 ₸</span>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
}

export default ProductCard2;