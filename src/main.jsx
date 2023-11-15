/* eslint-disable react/no-children-prop */
import ReactDom from "react-dom/client";
import './index.css'
import { restaurants } from "./constants/mock";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
<ul className='restorans'>
  <li>
    <h2>{restaurants[0].name}</h2>
    <h3>Меню</h3>
    <ul>
      {restaurants[0].menu.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
    <h3>Отзывы</h3>
    <ul>
      {restaurants[0].reviews.map(x => <li key={x.id}>{x.text}</li>)}
    </ul>
  </li>
  <li>
    <h2>{restaurants[1].name}</h2>
    <h3>Меню</h3>
    <ul>
      {restaurants[1].menu.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
    <h3>Отзывы</h3>
    <ul>
      {restaurants[1].reviews.map(x => <li key={x.id}>{x.text}</li>)}
    </ul>
  </li>
  <li>
    <h2>{restaurants[2].name}</h2>
    <h3>Меню</h3>
    <ul>
      {restaurants[2].menu.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
    <h3>Отзывы</h3>
    <ul>
      {restaurants[2].reviews.map(x => <li key={x.id}>{x.text}</li>)}
    </ul>
  </li>
  <li>
    <h2>{restaurants[3].name}</h2>
    <h3>Меню</h3>
    <ul>
      {restaurants[3].menu.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
    <h3>Отзывы</h3>
    <ul>
      {restaurants[3].reviews.map(x => <li key={x.id}>{x.text}</li>)}
    </ul>
  </li>
</ul>
);