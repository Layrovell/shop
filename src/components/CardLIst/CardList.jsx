import React from "react";
import data from "../../api/api.json";
import img from "../../images/1.jpg";

export const CardList = () => {
  return (
    <div className="col s9 main-border-left">
      <div className="row card-list">

      </div>
      <div className="row main-scroll">
        <div className="col s12 cards-container">
          {data.products.map(el => (
            <div className="card" key={el.id}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://images.unsplash.com/photo-1613412993582-cb11da2334f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
              </div>
              <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      <i className="material-icons right">more_vert</i>
                      {el.name}
                    </span>
                <p>{el.price} <span>UAN</span></p>
              </div>
              <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Description<i
                      className="material-icons right">close</i></span>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
