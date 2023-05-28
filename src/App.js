import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import Footer from "./Components/Footer/Footer.js";
import Products from './Components/Products/Products.js';

 const db =[ 
    { 
      id: 1,
      imagen: "resolute bag original",
      nombre: "Café Resolute Original",
      precio: "$5000",
    },
    { 
      id: 2,
      imagen: "delter y catuai",
      nombre: "Combo Ruffo + Bodum",
      precio: "$24000",
    },
    { 
      id: 3,
      imagen: "cafetera borum pour over",
      nombre: "Cafetera Pour Over",
      precio: "$12000",
    },
    { 
      id: 4,
      imagen: "tazas barista",
      nombre: "Tazas barista x 2",
      precio: "$2500",
    },
  ]
function App() {

  return (
    <>
      <Header />
      <Home />
      <Products 
    data= {db}/>
      <Footer />
    </>
  );
}

export default App;
