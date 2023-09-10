/* eslint-disable */
import React from "react";

// export class ContactForm extends React.Component {

// static defaultProps = {
//   contact: {
//     name: '',
//     details: ''
//   }
// }

export const ContactForm = ({ contact, onChange, onSubmit, onCancel }) => {
  const onChangeHandler = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    onChange({
      ...contact,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label className="d-block w-100">
          Name:
          <input
            className="form-control"
            name="name"
            value={contact.name}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <label className="d-block w-100">
          Contact details:
          <textarea
            className="form-control"
            name="details"
            value={contact.details}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="form-group">
        <input
          type="button"
          id="cancel-contact"
          className="btn btn-default"
          value="Cancel"
          onClick={onCancel}
        />
        <input
          type="submit"
          id="save-contact"
          className="btn btn-primary ml-2"
          value="Save"
        />
      </div>
    </form>
  );
};
