import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues(
        {
          ...fields,
          [event.target.id]: event.target.value,
        }
        // () => {
        //   validateField(event.target.id, event.target.value, initialState);
        //}
      );
    },
  ];
}

// function validateField(fieldName, value, initialState) {
//   const [formErrors] = useState(initialState);
//   const [emailValid] = useState(initialState);
//   const [passwordValid] = useState(initialState);

//   switch (fieldName) {
//     case "email":
//       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//       fieldValidationErrors.email = emailValid ? "" : " is invalid";
//       break;
//     case "password":
//       passwordValid = value.length >= 6;
//       fieldValidationErrors.password = passwordValid ? "" : " is too short";
//       break;
//     default:
//       break;
//   }
//   this.setState(
//     {
//       formErrors: fieldValidationErrors,
//       emailValid: emailValid,
//       passwordValid: passwordValid,
//     },
//     this.validateForm
//   );
// }
