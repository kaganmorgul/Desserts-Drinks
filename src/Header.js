import React, { useState } from "react";
import "./Header.css";

function Header({ sepet, setSepet }) {
  const [opensepet, setOpensepet] = useState(false);
  //  show and hidden basket
  const opensepetSettings = () => {
    opensepet === true ? setOpensepet(false) : setOpensepet(true);
  };
  // remove item from basket
  const elemansil = (indis) => {
    // indis = listedeki index numarası
    const sepetguncelle = sepet.filter((i, index) => index !== indis);
    setSepet(sepetguncelle);
  };
  // remove all items from basket
  const deleteall = () => {
    setSepet([]);
    alert("sepetiniz boşaltıldı");
  };

  return (
    <div>
      <div>
        <h1 className="header">Dessert & Drinks</h1>
      </div>
      {sepet.length !== 0 && (
        <div className="sepet">
          <div className="sepet-control">
            <h6 className="sepetTutari">
              {"Sepet Tutarı "}
              {sepet.reduce(
                (total, item) => (total = total + item.price),
                0
              )}{" "}
              {"TL"}{" "}
            </h6>
            <button onClick={opensepetSettings}>
              <i className="fa-solid fa-2xl fa-cart-shopping"></i>
            </button>
          </div>
          {opensepet && (
            <div className="sepet-icerik">
              <h6>sepetinizde {sepet.length} ürün var</h6>
              <ul className="sepet-listesi">
                {sepet.map((i, index) => (
                  <li key={i.index}>
                    <div>{i.name}</div>
                    <div>{`${i.price} tl`}</div>
                    <div>
                      {/* aynı id li tüm elemanlar silinmemesi için listedeki indexini gönderdim */}
                      <button onClick={() => elemansil(index)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
                <hr />
              </ul>
              <button className="deleteallbutton" onClick={deleteall}>Sepeti Boşalt</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
