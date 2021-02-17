import React, {useState, useEffect} from "react";
import './App.scss';
import './styles/reset.scss';
import 'bulma/css/bulma.css';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar';
import data from './api/api.json';
import img from './images/1.jpg';
import {Form} from "./components/Form/Form";
import {CardList} from "./components/CardLIst/CardList";

function App() {
  const [cards, setCards] = useState(data.products);
  const [category, setCategory] = useState('all')
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  console.log(cards);

  // localStorage
  useEffect(() => {
    const saveCards = localStorage.getItem('cards');

    if (saveCards) {
      setCards(JSON.parse(saveCards));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case 'min':
        setMin(e.target.value);
        break;
      case 'max':
        setMax(e.target.value);
        break;
      default: break;
    }
  };

  useEffect(() => {
    let filteredProducts = data.products;

    if (min !== '') {
      filteredProducts = filteredProducts.filter(p => p.price > min);
    }
    if (max !== '') {
      filteredProducts = filteredProducts.filter(p => p.price < max);
    }

    setCards(filteredProducts);
  }, [min, max]);

  const addHandler = (name, price, image, description) => {
    const newCard = {
      id: Date.now(),
      name,
      price,
      image,
      description,
    }

    setCards(prev => [newCard, ...prev])
  };

  const sortSmall = () => setCards([...cards].sort((a, b) => a.price - b.price));
  const sortBig = () => setCards([...cards].sort((a, b) => b.price - a.price));
  const sortAbc = () => setCards([...cards].sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <Router>
      <div className="App">
        <NavBar/>

        <div className="columns outline">
          <div className="column is-3 box-shadow side-bar">

            <div className="sidenav-item">
              <p className="title is-4 mb0">Цена</p>

              <div className="flex">
                <div className="control column is-one-fifths">
                  <p>from</p>
                  <input
                    value={min}
                    onChange={(e) => handleFilterChange(e, 'min')}
                    className="input is-primary"
                    type="number"
                    placeholder="1999"
                  />
                </div>
                <div className="control column is-one-fifths">
                  <p>to</p>
                  <input
                    value={max}
                    onChange={(e) => handleFilterChange(e, 'max')}
                    className="input is-primary"
                    type="number"
                    placeholder="29999"
                  />
                </div>
              </div>
            </div>

            <div className="sidenav-item">
              <p className="title is-4 mb-3">Валюта</p>
              <div className="flex">
                <button className="button is-primary is-outlined btn-left">USD</button>
                <button className="button is-success is-outlined btn-right">UAH</button>
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

          <CardList cards={cards} />

        </div>

        {/*<Footer />*/}

      </div>
    </Router>
  );
};

export default App;
