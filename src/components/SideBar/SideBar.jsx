import React, {useState} from "react";
// import useDebounce from '../use-debounce';

export const SideBar = () => {
  const [queryFrom, setQueryFrom] = useState('');
  const [queryTo, setQueryTo] = useState('');

  const changeInputFromHandler = (e) => setQueryFrom(e.target.value);
  const changeInputToHandler = (e) => setQueryTo(e.target.value);

  return (
    <div className="col s3">
      <div className="row sidebar">
        <h5>Цена</h5>

        <div className="input-field col s6">
          <input
            value={queryFrom}
            onChange={changeInputFromHandler}
            id="ww"
            type="number"
            className="validate"
            autoComplete="off"
            placeholder="1199"
          />
          <label htmlFor="ww">от</label>
        </div>

        <div className="input-field col s6">
          <input
            value={queryTo}
            onChange={changeInputToHandler}
            id="qq"
            type="number"
            className="validate"
            autoComplete="off"
            placeholder="29999"
          />
          <label htmlFor="qq">до</label>
        </div>

      </div>
      <div className="row sidebar">
        <h5>Валюта</h5>
        <div className="col s12 center-align">
          <button className="waves-effect waves-light btn btn-small pink btn-left btn-large">USD</button>
          <button className="waves-effect waves-light btn btn-small pink btn-right btn-large">UAN</button>
        </div>
      </div>
      <div className="row sidebar">
        <h5>Сортировка</h5>
        <div className="col s12">
          <form action="#">
            <p>
              <label>
                <input name="group1" type="radio"/>
                <span>По возрастанию</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio"/>
                <span>По убыванию</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio"/>
                <span>По алфавиту</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
