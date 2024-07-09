function Product({ image, name, price }) {
  return (
    <div className="product">
      <figure>
        <img src={image} alt={name} className="product-img" />
      </figure>
      <figcaption className="product-tag">{name} </figcaption>
      <span className="product-price">${price}</span>
    </div>
  );
}

export default Product;
