import React from "react";
import "./Products.css";

function Products({ product, setProduct, data, setSepet }) {
  // show all product
  const showAll = () => {
    const all = data.filter(
      (i) => i.category === "drinks" || i.category === "dessert"
    );
    setProduct(all);
  };
  // show drinks
  const DrinksShow = () => {
    const drinks = data.filter((i) => i.category === "drinks");
    setProduct(drinks);
  };
  // show dessert
  const DessertsShow = () => {
    const dessert = data.filter((i) => i.category === "dessert");
    setProduct(dessert);
  };
  // add to basket
  const sepeteEkle = (name, price, id, image) => {
    console.log(image);
    setSepet((sepet) => [...sepet, { name: name, price: price, id: id }]);
  };

  return (
    <div>
      <div className="control-button">
        <button onClick={showAll}>All</button>
        <button onClick={DrinksShow}>Drinks</button>
        <button onClick={DessertsShow}>Desserts</button>
      </div>
      <div className="urun-alani">
        <div className="urunler">
          {product.map((i) => (
            <div key={i.id} className="urun">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={process.env.PUBLIC_URL + `./photos/${i.image}`}
                  alt=""
                />
              </div>
              <div className="urun-info">
                <div className="urun-name">
                  <p>{i.name}</p>
                </div>
                <p>
                  {i.description}
                </p>
                <h5>{`${i.price} TL`}</h5>
                <button
                  onClick={() => sepeteEkle(i.name, i.price, i.id, i.image)}
                  className="addbutton"
                >
                  <i className="fa-solid fa-xl fa-cart-plus"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
