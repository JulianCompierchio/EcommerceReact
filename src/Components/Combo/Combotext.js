import React from "react";

const data = [
  {
    id: 1,
    texto: "En Coffe Times  te ofrecemos una gran variedad de",
  },
  {
    id: 2,
    texto:
      "cafeteras y productos para preparar el café perfecto en la comodidad de",
  },
  {
    id: 3,
    texto: "tu hogar.Desde nuestras cafeteras de alta calidad,accesorios,",
  },
  {
    id: 4,
    texto:
      "hasta nuestros granos de café recién tostados, en nuestra tienda tenemos todo lo",
  },
  {
    id: 5,
    texto: "que necesitas para disfrutar del mejor café en casa.",
  },
];

function Combotext() {
  return (
    <ul>
      {data.map((item, index) => (
        <li className="combo-text" key={index}>
          <h6>{item.texto}</h6>
        </li>
      ))}
      <button className="btn-combo">Comprar ahora</button>
    </ul>
  );
}

export default Combotext;
