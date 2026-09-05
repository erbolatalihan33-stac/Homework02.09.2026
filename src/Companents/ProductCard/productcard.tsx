import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img 
        src="https://via.placeholder.com/300x200" 
        alt="Товар" 
        className="product-image" 
      />
      <div className="product-info">
        <h2 className="product-title">Беспроводные наушники Hyper X Cloud 2</h2>
        <p className="product-description">Качественный звук, активное шумоподавление и до 30 часов работы от одного заряда.</p>
        <div className="product-footer">
          <span className="product-price">20 000 ₸</span>
          <button className="buy-button">Купить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;