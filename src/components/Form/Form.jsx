import React, {useState} from "react";

export const Form = ({onAdd}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const addHandler = () => {
    if (!name || !price || !description || !image) {
      return;
    }

    onAdd(name, price, image, description);

    setName('');
    setPrice('');
    setDescription('');

  }

  const qqq = () => {
    console.log('add');
  }


  return (
    <div className="row sidebar form-sub">
      <p className="title is-4 mb-3">Добавь товар</p>
      <div className="col s6">
        <div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Имя</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input is-primary"
                    type="text"
                    placeholder="Name"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Цена</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="input is-primary"
                    placeholder="1000"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Файл</label>
            </div>
            <div className="field-body">
              <div className="file">
                <label className="file-label">
                  <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="file-input"
                    type="file"
                    name="resume"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"/>
                    </span>
                    <span className="file-label">
                      Choose a file…
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea is-primary"
                    placeholder="Description"
                    onresize="none"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="box has-text-centered">
            <button
              className="button is-success"
              onClick={addHandler}
            >
              <span className="icon is-small"><i className="fas fa-check"/></span>
              <span>Save</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
