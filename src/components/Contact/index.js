import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <div>
        <h1
          id="contact"
          data-testid="h1tag"
          className="text-center py-3 heading"
        >
          Contact Me
        </h1>
        <form id="contact-form" onSubmit={handleSubmit} className="container">
          <div className="row justify-content-center">
            <div className="col-6 m-2 p-1 text-start">
              <label className="col-12" htmlFor="name">
                Name:&nbsp;&nbsp;
              </label>
              <input
                type="text"
                name="name"
                className="col-12"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div className="col-6 m-2 p-1 text-start">
              <label className="col-12" htmlFor="email">
                Email:&nbsp;&nbsp;
              </label>
              <input
                type="email"
                name="email"
                className="col-12"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div className="col-6 m-2 p-1 text-start">
              <label className="col-12" htmlFor="message">
                Message:&nbsp;&nbsp;
              </label>
              <textarea
                name="message"
                rows="5"
                className="col-12"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div className="col-12 p-1 text-center text-danger">
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button
              className="col-6 p-2 mt-2 mb-5 bg-white"
              data-testid="button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
