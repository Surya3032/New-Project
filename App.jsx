import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Cotton Jacket",
      tags: ["Unisex", "Bag"],
      var: 3,
      price: "$45.00",
      stock: 999,
      low: 500,
    },
    {
      id: 2,
      name: "Jeans",
      tags: ["Unisex", "Bag"],
      var: 3,
      price: "$45.00",
      stock: 999,
      low: 500,
    },
    {
      id: 3,
      name: "Cotton Jeans",
      tags: ["Unisex", "Bag"],
      var: 3,
      price: "$45.00",
      stock: 999,
      low: 500,
    },
    {
      id: 4,
      name: "Satin Shirt",
      tags: ["Unisex", "Bag"],
      var: 3,
      price: "$45.00",
      stock: 999,
      low: 500,
    },
  ]);

  const [selected, setSelected] = useState([]);
  const [activeTab, setActiveTab] = useState("Active");

  // Handle row selection
  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // Handle select all
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = products.map((product) => product.id);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <h1>Products</h1>
        <p>Dashboard / Products</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Active" ? "active" : ""}`}
          onClick={() => setActiveTab("Active")}
        >
          Active
        </button>
        <button
          className={`tab ${activeTab === "Inactive" ? "active" : ""}`}
          onClick={() => setActiveTab("Inactive")}
        >
          Inactive
        </button>
        <button
          className={`tab ${activeTab === "All" ? "active" : ""}`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
      </div>

      {/* Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selected.length === products.length}
                // eslint-disable-next-line react/no-unknown-property
                indeterminate={
                  selected.length > 0 && selected.length < products.length
                }
              />
            </th>
            <th>Product</th>
            <th>Tags</th>
            <th>Var</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => handleSelect(product.id)}
                />
              </td>
              <td>{product.name}</td>
              <td>
                {product.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
