import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddPost.scss";
import { useState } from "react";

const AddPost = () => {
  const [previewImage, setPreviewImage] = useState("");

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      hashtags: [],
      link: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("El título es requerido"),
      description: Yup.string().required("La descripción es requerida"),
      link: Yup.string()
        .url("Debe ser una URL válida")
        .required("El enlace es requerido"),
    }),
    onSubmit: (values) => {
      console.log("Formulario enviado:", values);
      console.log("Hashtags:", values.hashtags);

      setPreviewImage("https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg");

      formik.resetForm();
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      let newHashtag = e.target.value.trim();
      if (newHashtag !== "") {
        if (!newHashtag.startsWith("#")) {
          newHashtag = `#${newHashtag}`;
        }
        // Actualiza el arreglo hashtags en el estado de Formik
        formik.setFieldValue("hashtags", [
          ...formik.values.hashtags,
          newHashtag,
        ]);
        e.target.value = "";
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl); 
      formik.setFieldValue("image", imageUrl); // Actualiza el valor de "image" en formik.values
    }
  };

  return (
    <>
      <h1 className="addPost__title">Crear publicación</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="form__label-img" htmlFor="image">
          <img
            className="form__img"
            src={previewImage ? previewImage : "https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-file-icon-image_1128287.jpg"} 
            alt="Publicación"
          />
          <input
            className="form__input-img"
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
          />
        </label>
        <label className="form__label" htmlFor="title">
          Title
          <input
            className="form__input-title"
            type="text"
            name="title"
            id="title"
            placeholder="Explica en que consiste tu publicación"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div>{formik.errors.title}</div>
          )}
        </label>
        <label className="form__label" htmlFor="description">
          Description
          <textarea
            className="form__input-text-description"
            name="description"
            id="description"
            placeholder="Añade una descripción o mención a tu publicación"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description && (
            <div>{formik.errors.description}</div>
          )}
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
            {formik.values.hashtags.map((tag, index) => (
              <li className="form__list-item" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </label>
        <label className="form__label" htmlFor="link">
          Link
          <input
            className="form__input-link"
            type="text"
            name="link"
            id="link"
            placeholder="Añade el enlace aquí"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          {formik.errors.link && formik.touched.link && (
            <div>{formik.errors.link}</div>
          )}
        </label>
        <button className="form__button" type="submit">
          Crear publicación
        </button>
      </form>
    </>
  );
};

export default AddPost;
