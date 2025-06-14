import { createContext, useState } from "react";

const FormContext = createContext();

function Provider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    idCode: "",
    birthDate: "",
    age: "",
    phoneNumber: "",
    homePhoneNumber: "",
    fullAdderess: "",
  });

  const [idError, setIdError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const handleIdCode = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^0-9]/g, "");

    const isTenDigits = cleanedValue.length === 10;

    // let isUnique = true;
    // for (let i = 0; i < cleanedValue.length; i++) {
    //   // ✅ condition fixed
    //   if (cleanedValue.indexOf(cleanedValue[i]) !== i) {
    //     isUnique = false;
    //     break;
    //   }
    // }

    if (isTenDigits) {
      console.log("✌️ idCode is Valid");
      setIdError(false);
    } else {
      console.log("🤦 idCode is Invalid");
      setIdError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleAge = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 3);
    const numericAge = parseInt(cleanedValue, 10);
    const isAgeValid = numericAge >= 0 && numericAge <= 120;
    if (isAgeValid) {
      console.log("✌️ age  is Valid");
      setIdError(false);
    } else {
      console.log("🤦 age is Invalid");
      setIdError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handlePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 11);
    const cleanedValue2 = value.replace(/\D/g, "").slice(0, 10);
    const isValid = /^09\d{9}$/.test(cleanedValue);
    const isValid2 = /^9\d{9}$/.test(cleanedValue2);
    if (isValid || isValid2) {
      console.log("✌️ phone  is Valid");
      setIdError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setIdError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleHomePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 8);
    const numVars = [
      "021",
      "025",
      "026",
      "031",
      "041",
      "051",
      "071",
      "076",
      "081",
      "083",
      "084",
      "085",
      "086",
    ];

    const prefix = cleanedValue.slice(0, 3);

    const isValid = numVars.includes(prefix) && cleanedValue.length === 8;

    if (isValid) {
      console.log("✌️ home  is Valid");
      setIdError(false);
    } else {
      console.log("🤦 home is Invalid");
      setIdError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const sharedValues = {
    formData,
    handleInputChange,
    handleIdCode,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    idError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
