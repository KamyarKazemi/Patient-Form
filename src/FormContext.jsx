// ✅ Refactored FormContext — Cleaned up state, ensured data is ready for Axios submission
import { createContext, useState } from "react";
import axios from "axios";

const FormContext = createContext();

function Provider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    idCode: "",
    medicalRecordNumber: "",
    birthDate: "",
    age: "",
    phoneNumber: "",
    fullAddress: "",
    admissionDateTime: "",
    referringPhysician: "",
    primaryDiagnosis: "",
    knownAllergies: "",
    currentMedications: "",
    medicalHistory: "",
    previousICUAdmissions: "",
    insuranceCompany: "",
    insurancePolicyNumber: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    secondEmergencyContactPhone: "",
    emergencyContactAddress: "",
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
    admissionSource: "",
    roomBedAssignment: "",
    languagePreference: "",
    religionCulturalConsiderations: "",
    advanceDirectives: "",
    legalGuardian: "",
    admissionNotes: "",
  });

  const [isAnyError, setIsAnyError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [medicalRecordError, setMedicalRecordError] = useState(false);
  const [insuranceError, setInsuranceError] = useState(false);
  const [emergencyContactError, setEmergencyContactError] = useState(false);
  const [secondEmergencyContactError, setSecondEmergencyContactError] =
    useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [vitalSignsError, setVitalSignsError] = useState(false);
  const [glasgowError, setGlasgowError] = useState(false);
  const [apacheError, setApacheError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIdCode = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "");
    setIdError(cleaned.length !== 10);
    setFormData((prev) => ({ ...prev, idCode: cleaned }));
  };

  const handleMedicalRecordNumber = (e) => {
    const cleaned = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setMedicalRecordError(cleaned.length < 4 || cleaned.length > 20);
    setFormData((prev) => ({ ...prev, medicalRecordNumber: cleaned }));
  };

  const handlePhoneNumber = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 11);
    const valid = /^09\d{9}$/.test(cleaned);
    setPhoneNumberError(!valid);
    setFormData((prev) => ({ ...prev, phoneNumber: cleaned }));
  };

  const handleName = (e) => {
    const { name, value } = e.target;
    const cleaned = value.replace(/[^a-zA-Zآ-ی\s]/g, "");
    setFormData((prev) => ({ ...prev, [name]: cleaned }));
  };

  const handleAge = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 3);
    const age = parseInt(cleaned, 10);
    setIsAnyError(age < 0 || age > 120);
    setFormData((prev) => ({ ...prev, age: cleaned }));
  };

  const handleInsurancePolicyNumber = (e) => {
    const cleaned = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setInsuranceError(cleaned.length !== 10);
    setFormData((prev) => ({ ...prev, insurancePolicyNumber: cleaned }));
  };

  const handleEmergencyContactPhone = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 11);
    const valid = /^09\d{9}$/.test(cleaned);
    setEmergencyContactError(!valid);
    setFormData((prev) => ({ ...prev, emergencyContactPhone: cleaned }));
  };

  const handleSecondEmergencyContactPhone = (e) => {
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 11);
    const valid = /^09\d{9}$/.test(cleaned);
    setSecondEmergencyContactError(!valid);
    setFormData((prev) => ({ ...prev, secondEmergencyContactPhone: cleaned }));
  };

  const handleWeight = (e) => {
    const value = parseFloat(e.target.value);
    setWeightError(isNaN(value) || value < 0 || value > 500);
    setFormData((prev) => ({ ...prev, admissionWeight: value }));
  };

  const handleHeight = (e) => {
    const value = parseFloat(e.target.value);
    setHeightError(isNaN(value) || value < 0 || value > 300);
    setFormData((prev) => ({ ...prev, admissionHeight: value }));
  };

  const handleVitalSigns = (e) => {
    const { value } = e.target;
    setVitalSignsError(!value);
    setFormData((prev) => ({ ...prev, vitalSignsOnAdmission: value }));
  };

  const handleGlasgowComaScale = (e) => {
    const val = parseInt(e.target.value, 10);
    setGlasgowError(isNaN(val) || val < 3 || val > 15);
    setFormData((prev) => ({ ...prev, glasgowComaScale: val }));
  };

  const handleApacheScore = (e) => {
    const val = parseInt(e.target.value, 10);
    setApacheError(isNaN(val) || val < 0 || val > 71);
    setFormData((prev) => ({ ...prev, apacheScore: val }));
  };

  // Date dropdowns (for birthDate)
  const [years, setYears] = useState([]);
  const [months] = useState([
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [days, setDays] = useState([]);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setFormData((prev) => ({
      ...prev,
      birthDate: `${year}/${selectedMonth || ""}`,
    }));
  };

  const handleMonthChange = (e) => {
    const month = e.target.value;
    setSelectedMonth(month);
    const daysInMonth = month <= 6 ? 31 : month <= 11 ? 30 : 29;
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  };

  const handleDayChange = (e) => {
    const day = e.target.value;
    setFormData((prev) => ({ ...prev, birthDate: `${prev.birthDate}/${day}` }));
  };

  const postFormData = async () => {
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/submit",
        formData
      );
      console.log("✅ Data submitted successfully:", response.data);
      return { success: true };
    } catch (error) {
      console.error("❌ Submission failed:", error);
      return { success: false, error };
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleInputChange,
        handleIdCode,
        handleMedicalRecordNumber,
        handlePhoneNumber,
        handleName,
        handleAge,
        handleInsurancePolicyNumber,
        handleEmergencyContactPhone,
        handleSecondEmergencyContactPhone,
        handleWeight,
        handleHeight,
        handleVitalSigns,
        handleGlasgowComaScale,
        handleApacheScore,
        handleYearChange,
        years,
        setYears,
        handleMonthChange,
        months,
        selectedMonth,
        handleDayChange,
        days,
        isAnyError,
        idError,
        phoneNumberError,
        medicalRecordError,
        insuranceError,
        emergencyContactError,
        secondEmergencyContactError,
        weightError,
        heightError,
        vitalSignsError,
        glasgowError,
        apacheError,
        postFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
