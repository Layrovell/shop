import React, {useState} from "react";
import './Card.scss';
import img from "../../../images/1.jpg";
import {Modal} from '../../Modal/Modal';

export const Card = ({card}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <li className="column is-4 is-offset-1">
        <div className="card">
          <div className="card__container-image">
            <img className="card__image" src={`https://layrovell.github.io/shop/images/${card.image}`} alt="adsa" />
          </div>
          <div className="card__content">
            <h2 className="card__title">{card.name}</h2>
            <h2 className="card__price">
              {card.price} <sup className="card__money">UAH</sup>
            </h2>
            <p className="card__text">{`${(card.description).slice(0, 80)}...`}</p>
            <div className="has-text-centered">
              <button
                onClick={() => {
                  setModalActive(true);
                }}
                className="button is-primary is-outlined"
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </li>

      {modalActive && (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          card={card}
        >
          <div className="intro">
            <img className="card__image--intro" src={`https://layrovell.github.io/shop/images/${card.image}`} alt=""/>
            <div className="intro__content">
              <p className="intro__name">{card.name}</p>
              <hr/>
              <p className="intro__title">Цена:</p>
              <p>{card.price}</p>
              <p className="intro__title">Описание:</p>
              <p className="intro__description">{card.description}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
