import React, {useState, useEffect} from "react";
import './App.scss';
import './styles/reset.scss';
import 'bulma/css/bulma.css';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar';
import data from './api/api.json';
import img from './images/1.jpg';
import {Form} from "./components/Form/Form";
import {SideBar} from "./components/SideBar/SideBar";
import {Footer} from "./components/Footer/Footer";

function App() {
  const [cards, setCards] = useState(data.products);
  const [queryFrom, setQueryFrom] = useState('');
  const [queryTo, setQueryTo] = useState('');

  // localStorage
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('cards') || '[]');
  //
  //   setCards(saved);
  // }, []);
  //
  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  const changeInputFromHandler = (e) => setQueryFrom(e.target.value);
  const changeInputToHandler = (e) => setQueryTo(e.target.value);

  const addHandler = (name, price, image, description) => {
    const newCard = {
      id: Date.now(),
      name: name,
      price: price,
      image: image,
      description: description,
    }

    setCards(prev => [newCard, ...prev])
  };

  console.log(cards);

  const getImageURI = (url) => {
    return "./images/" + url;
  };



  const sortBig = () => setCards([...cards].sort((a, b) => a.price - b.price));
  const sortSmall = () => setCards([...cards].sort((a, b) => b.price - a.price));
  const sortAbc = () => setCards([...cards].sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <Router>
      <div className="App">
        <NavBar/>

        <div className="columns outline">
          <div className="column is-3 lightgray-line side-bar">

            <div className="sidenav-item">
              <p className="title is-4 mb0">Цена</p>

              <div className="flex">
                <div className="control column is-one-fifths">
                  <p>from</p>
                  <input className="input" type="number" placeholder="1999"/>
                </div>

                <div className="control column is-one-fifths">
                  <p>to</p>
                  <input className="input" type="number" placeholder="29999"/>
                </div>
              </div>
            </div>

            <div className="sidenav-item">
              <p className="title is-4 mb-3">Валюта</p>
              <div className="flex">
                <button className="button is-primary is-outlined btn-left">USD</button>
                <button className="button is-success is-outlined btn-right">UAN</button>
              </div>
            </div>

            <div className="sidenav-item">
              <p className="title is-4 mb-3">Сотрировка</p>
              <div className="is-flex is-flex-direction-column">
                <label className="radio mx-2" onClick={sortSmall}>
                  <input type="radio" name="answer"/>
                  <span className="pl-2">по возростанию цены</span>
                </label>

                <label className="radio my-1" onClick={sortBig}>
                  <input type="radio" name="answer"/>
                  <span className="pl-2">по убыванию цены</span>
                </label>

                <label className="radio mx-2" onClick={sortAbc}>
                  <input type="radio" name="answer"/>
                  <span className="pl-2">по алфавиту</span>
                </label>
              </div>
            </div>

            <Form onAdd={addHandler} />

          </div>
          <div className="column main-scroll lightgray-line">
            <ul className="cards">
              {cards.map(card => (
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={getImageURI(card.image)} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{card.name}</h2>
                      <h2 className="card_price">{card.price}</h2>
                      <p className="card_text">{`${(card.description).slice(0, 120)} ...`}</p>
                      <div className="has-text-centered">
                        <button className="button is-primary is-outlined">Outlined</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*<Footer />*/}

      </div>
    </Router>
  );
};

export default App;
