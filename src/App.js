import "./App.css";
import Products from "./Products";
import Header from "./Header";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      category: "drinks",
      name: "drink 1",
      image : "drink1.jpg",
      description: "delicious drinks and foods for you ...",
      price: 12,
    },
    {
      id: 2,
      category: "drinks",
      name: "drink 2",
      image : "drink2.jpg",
      description: "delicious drinks and foods for you ...",
      price: 14,
    },
    {
      id: 3,
      category: "drinks",
      name: "drink 3",
      image : "drink3.jpg",
      description: "delicious drinks and foods for you ...",
      price: 18,
    },
    {
      id: 4,
      category: "drinks",
      name: "drink 4",
      image : "drink4.jpg",
      description: "delicious drinks and foods for you ...",
      price: 22,
    },
    {
      id: 5,
      category: "drinks",
      name: "drink 5",
      image : "drink5.jpg",
      description: "delicious drinks and foods for you ...",
      price: 19,
    },
    {
      id: 6,
      category: "dessert",
      name: "cake 1",
      image : "cake1.jpg",
      description: "delicious drinks and foods for you ...",
      price: 25,
    },
    {
      id: 7,
      category: "dessert",
      name: "cake 2",
      image : "cake2.jpg",
      description: "delicious drinks and foods for you ...",
      price: 28,
    },
    {
      id: 8,
      category: "dessert",
      name: "cake 3",
      image : "cake3.jpg",
      description: "delicious drinks and foods for you ...",
      price: 30,
    },
    {
      id: 9,
      category: "dessert",
      name: "cake 4",
      image : "cake4.jpg",
      price: 19,
    },
    {
      id: 10,
      category: "dessert",
      name: "cake 5",
      image : "cake5.jpg",
      description: "delicious drinks and foods for you ...",
      price: 23,
    },
  ];
  const [sepet, setSepet] = useState([]);
  const [product, setProduct] = useState(data);
  const [sepetlist, setSepetlist] = useState(product);

  return (
    <div className="App">
      <Header
        data={data}
        product={product}
        setProduct={setProduct}
        sepetlist={sepetlist}
        setSepetlist={setSepetlist}
        sepet={sepet}
        setSepet={setSepet}
      />
      <Products
        data={data}
        product={product}
        setProduct={setProduct}
        sepetlist={sepetlist}
        setSepetlist={setSepetlist}
        sepet={sepet}
        setSepet={setSepet}
      />
    </div>
  );
}

export default App;
