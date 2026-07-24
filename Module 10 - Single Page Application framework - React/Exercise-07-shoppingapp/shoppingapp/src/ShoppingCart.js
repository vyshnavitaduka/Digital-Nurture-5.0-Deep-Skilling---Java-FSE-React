import React, { useState } from "react";

// GUESSED CONTENT: custom file name wasn't visible in screenshots.
// Placeholder based on folder name "shoppingapp" — replace with your real component.

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Headphones", price: 2500 },
  { id: 3, name: "Keyboard", price: 1500 },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping App</h2>
      <h3>Products</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart ({cart.length} items)</h3>
      <p>Total: ₹{total}</p>
    </div>
  );
}

export default ShoppingCart;
