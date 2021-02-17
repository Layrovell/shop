import React from "react";
import './CardList.scss';
import {Card} from './Card/Card';

export const CardList = ({cards}) => {
  return (
    <div className="column main-scroll lightgray-line">
      <ul className="cards">
        {cards.map(card => (
          <Card card={card} key={card.id}/>
        ))}
      </ul>
    </div>
  );
};
