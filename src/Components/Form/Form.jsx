import React from "react";
import { useFormWithValidation } from "../../Utils/useForm";

const Form = ({inputs, error, onSubmit, clearError}) => {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    resetForm();
  };

  const handleCloseError = (evt) => {
    evt.preventDefault()
    clearError()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__inputs">
        {inputs.map((input) => {
          return (
            <div className="form__input-container" key={input.id}>
              <input
                name={input.name}
                value={values[input.name] || ""}
                onChange={handleChange}
                className="form__input"
                type={input.type}
                required={input.required}
                pattern={input.pattern}
                minLength={input.minLength}
                placeholder={input.placeholder}
              />
              <span className="form__error">{errors[input.name]}</span>
            </div>
          );
        })}
      </div>
      {error && (
        <button onClick={handleCloseError} className="form__submit-error">
          Что-то пошло не так... {error}
          <span className="form__error-close">
            <div></div>
            <div></div>
          </span>
        </button>
      )}
      <button className="form__submit" type="submit" disabled={!isValid}>
        Hапишите мне
      </button>
    </form>
  );
};

export default Form;
