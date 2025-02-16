import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Akdeniz",
    ingredients: "İtalyan zeytinyağı ve biberiye ile ekmek",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Domates ve mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: " Ispanaklı Pizza",
    ingredients: "Domates, mozarella, ıspanak ve ricotta peyniri",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: " Mantarlı Pizza",
    ingredients: "Domates, mozarella, mantar ve soğan",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamlı Pizza ",
    ingredients: "Domates, mozarella ve pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Domates, mozarella, jambon, roka ve burrata peyniri",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizzaObj.photoName || "default.jpg"}
        alt={pizzaObj.name || "Pizza"}
      />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Tükendi" : Number(pizzaObj.price) + 3.9}
        </span>
      </div>
    </li>
  );
}

export default Pizza;

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Menü</h2>

      {numpizzas > 0 ? (
        <React.Fragment>
          <p>
            DÜnyaca ünlü Türk mutfağı.{pizzas.length} Taze organik ve taş
            fırında pişen pizzalarımızı tercih edebilirsiniz.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Menü üstünde çalışıyoruz. Lütfen daha sonra tekrar deneyin :(</p>
      )}
    </main>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Şu anda kapalıyız. Lütfen daha sonra tekrar deneyin.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Saat {openHour}:00 ile {closeHour}:00 saatleri arasında açığız.Online
        sipariş verebilirsiniz
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
