import React, { useState } from "react";
import "./AddPost.scss";

const AddPost = () => {
  const [hashtags, setHashtags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      let newHashtag = e.target.value.trim();
      if (newHashtag !== "") {
        if (!newHashtag.startsWith("#")) {
          newHashtag = `#${newHashtag}`; // Agrega "#" al inicio si no está presente
        }
        setHashtags([...hashtags, newHashtag]);
        e.target.value = ""; // Limpiar el campo de entrada
      }
    }
  };

  return (
    <>
      <h1 className="addPost__title">Crear publicación</h1>
      <form className="form">
        <label className="form__label-img" htmlFor="image">
          <img className="form__img" src="https://www.musicplaza.com/cdn/shop/files/nylon4_1200x1200.jpg?v=1709848129" alt="Publicación" />
          <input className="form__input-img" type="file" name="image" id="image"></input>
        </label>
        <label className="form__label" htmlFor="title">
          Title
          <input className="form__input-title" type="text" name="title" id="title" placeholder="Explica en que consiste tu publicación" />
        </label>
        <label className="form__label" htmlFor="description">
          Description
          <textarea className="form__input-text-description" name="description" id="description" placeholder="Añade una descripción o mención a tu publicación" />
        </label>
        <label className="form__label form__label-tags" htmlFor="hashtags">
          Hashtags
          <input
          className="form__input-hastags"
            type="text"
            name="hashtags"
            id="hashtags"
            placeholder="Añade tus hashtags aquí"
            onKeyDown={handleKeyDown}
          />
          <ul className="form__list-container">
            {hashtags.map((tag, index) => (
              <li className="form__list-item" key={index}>{tag}</li>
            ))}
          </ul>
        </label>
        <label className="form__label" htmlFor="link">
          Link
          <input className="form__input-link" type="text" name="link" id="link" placeholder="Añade el enlace aquí" />
        </label>
        <button className="form__button" type="submit">Crear publicación</button>
      </form>
    </>
  );
};

export default AddPost;
