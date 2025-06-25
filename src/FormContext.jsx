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
    fullAddress: "", // Fixed typo: fullAdderess -> fullAddress
  });

  // Separate error states for better UX
  const [idError, setIdError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [homePhoneError, setHomePhoneError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const handleName = (e) => {
    const { name, value } = e.target;
    // Only allow Persian and English letters and spaces
    const cleanedValue = value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, "");

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleIdCode = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^0-9]/g, "");

    const isTenDigits = cleanedValue.length === 10;

    // Check if all digits are the same (invalid Iranian national code pattern)
    const isAllSameDigits = /^(\d)\1{9}$/.test(cleanedValue);

    // Basic validation - should be 10 digits and not all same digits
    const isValid = isTenDigits && !isAllSameDigits;

    if (isValid) {
      console.log("✌️ idCode is Valid");
      setIdError(false);
    } else {
      console.log("🤦 idCode is Invalid");
      setIdError(cleanedValue.length > 0); // Only show error if user has typed something
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleAge = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 3);
    const numericAge = parseInt(cleanedValue, 10) || 0;
    const isAgeValid = numericAge >= 0 && numericAge <= 120;

    if (isAgeValid || cleanedValue === "") {
      console.log("✌️ age is Valid");
      setAgeError(false);
    } else {
      console.log("🤦 age is Invalid");
      setAgeError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handlePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 11);

    // Iranian mobile number patterns: 09xxxxxxxxx or 9xxxxxxxxx
    const isValid11Digit = /^09\d{9}$/.test(cleanedValue);
    const isValid10Digit = /^9\d{9}$/.test(cleanedValue);

    if (isValid11Digit || isValid10Digit || cleanedValue === "") {
      console.log("✌️ phone is Valid");
      setPhoneError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setPhoneError(cleanedValue.length > 0);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleHomePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 8);

    // Iranian landline area codes
    const validAreaCodes = [
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
    const isValid =
      validAreaCodes.includes(prefix) && cleanedValue.length === 8;

    if (isValid || cleanedValue === "") {
      console.log("✌️ home phone is Valid");
      setHomePhoneError(false);
    } else {
      console.log("🤦 home phone is Invalid");
      setHomePhoneError(cleanedValue.length > 0);
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
    handleName,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    idError,
    ageError,
    phoneError,
    homePhoneError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
