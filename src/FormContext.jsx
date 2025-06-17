import { createContext, useState } from "react";

const FormContext = createContext();

function Provider({ children }) {
  const [formData, setFormData] = useState({
    // Patient Identity
    firstName: "",
    lastName: "",
    fullName: "",
    idCode: "",
    medicalRecordNumber: "",
    birthDate: "",
    age: "",
    phoneNumber: "",
    homePhoneNumber: "",
    fullAddress: "",

    // Medical Information
    admissionDateTime: "",
    referringPhysician: "",
    primaryDiagnosis: "",
    secondaryDiagnoses: "",
    knownAllergies: "",
    currentMedications: "",
    medicalHistory: "",
    recentSurgeries: "",
    previousICUAdmissions: "",

    // Insurance Information
    insuranceCompany: "",
    insurancePolicyNumber: "",

    // Emergency Contact
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    emergencyContactPhone2: "",
    emergencyContactAddress: "",

    // Clinical Assessment
    admissionWeight: "",
    admissionHeight: "",
    vitalSignsOnAdmission: "",
    glasgowComaScale: "",
    apacheScore: "",
    ventilatorRequirements: "",
    isolationPrecautions: "",
    dietRestrictions: "",
    mobilityLimitations: "",
    mentalStatusAssessment: "",

    // Administrative Information
    admissionSource: "",
    roomBedAssignment: "",
    languagePreference: "",
    religionCulturalConsiderations: "",
    advanceDirectives: "",
    legalGuardian: "",
    admissionNotes: "",
  });

  // Error states
  const [idError, setIdError] = useState(false);
  const [medicalRecordError, setMedicalRecordError] = useState(false);
  const [insuranceError, setInsuranceError] = useState(false);
  const [emergencyContactError, setEmergencyContactError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [vitalSignsError, setVitalSignsError] = useState(false);
  const [glasgowError, setGlasgowError] = useState(false);
  const [apacheError, setApacheError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`${name}: ${value}`);
  };

  const handleIdCode = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^0-9]/g, "");

    const isTenDigits = cleanedValue.length === 10;

    let isUnique = true;
    for (let i = 0; i < cleanedValue.length; i++) {
      if (cleanedValue.indexOf(cleanedValue[i]) !== i) {
        isUnique = false;
        break;
      }
    }

    if (isTenDigits && isUnique) {
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

  const handleMedicalRecordNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^A-Za-z0-9]/g, "");

    const isValid = cleanedValue.length >= 4 && cleanedValue.length <= 20;

    if (isValid) {
      console.log("✌️ Medical Record Number is Valid");
      setMedicalRecordError(false);
    } else {
      console.log("🤦 Medical Record Number is Invalid");
      setMedicalRecordError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleName = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^a-zA-Zآ-ی\s]/g, "");

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
      console.log("✌️ age is Valid");
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
      console.log("✌️ phone is Valid");
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
      console.log("✌️ home is Valid");
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

  const handleInsurancePolicyNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^A-Za-z0-9]/g, "");

    const isValid = cleanedValue.length >= 5 && cleanedValue.length <= 25;

    if (isValid) {
      console.log("✌️ Insurance Policy Number is Valid");
      setInsuranceError(false);
    } else {
      console.log("🤦 Insurance Policy Number is Invalid");
      setInsuranceError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleEmergencyContactPhone = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 11);
    const cleanedValue2 = value.replace(/\D/g, "").slice(0, 10);
    const isValid = /^09\d{9}$/.test(cleanedValue);
    const isValid2 = /^9\d{9}$/.test(cleanedValue2);

    if (isValid || isValid2) {
      console.log("✌️ Emergency Contact Phone is Valid");
      setEmergencyContactError(false);
    } else {
      console.log("🤦 Emergency Contact Phone is Invalid");
      setEmergencyContactError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleWeight = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    const isValid = numericValue >= 0.5 && numericValue <= 500;

    if (isValid || value === "") {
      console.log("✌️ Weight is Valid");
      setWeightError(false);
    } else {
      console.log("🤦 Weight is Invalid");
      setWeightError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHeight = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value, 10);

    const isValid = numericValue >= 30 && numericValue <= 300;

    if (isValid || value === "") {
      console.log("✌️ Height is Valid");
      setHeightError(false);
    } else {
      console.log("🤦 Height is Invalid");
      setHeightError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVitalSigns = (e) => {
    const { name, value } = e.target;

    // Basic validation - should contain essential vital signs keywords
    const requiredKeywords = ["فشار", "ضربان", "تنفس", "دما"];
    const hasRequiredInfo = requiredKeywords.some((keyword) =>
      value.includes(keyword)
    );

    if (hasRequiredInfo || value === "") {
      console.log("✌️ Vital Signs are Valid");
      setVitalSignsError(false);
    } else {
      console.log("🤦 Vital Signs are Incomplete");
      setVitalSignsError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGlasgowComaScale = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value, 10);

    const isValid = numericValue >= 3 && numericValue <= 15;

    if (isValid || value === "") {
      console.log("✌️ Glasgow Coma Scale is Valid");
      setGlasgowError(false);
    } else {
      console.log("🤦 Glasgow Coma Scale is Invalid");
      setGlasgowError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApacheScore = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value, 10);

    const isValid = numericValue >= 0 && numericValue <= 71;

    if (isValid || value === "") {
      console.log("✌️ APACHE Score is Valid");
      setApacheError(false);
    } else {
      console.log("🤦 APACHE Score is Invalid");
      setApacheError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sharedValues = {
    formData,
    handleInputChange,
    handleIdCode,
    handleMedicalRecordNumber,
    handleName,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    handleInsurancePolicyNumber,
    handleEmergencyContactPhone,
    handleWeight,
    handleHeight,
    handleVitalSigns,
    handleGlasgowComaScale,
    handleApacheScore,
    idError,
    medicalRecordError,
    insuranceError,
    emergencyContactError,
    weightError,
    heightError,
    vitalSignsError,
    glasgowError,
    apacheError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
