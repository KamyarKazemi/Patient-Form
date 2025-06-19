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
    knownAllergies: "",
    currentMedications: "",
    medicalHistory: "",
    previousICUAdmissions: "",
    baseIcuReason: [
      {
        symptom: "سایر دلایل عمومی (Miscellaneous)",
        subSymptom: [
          "نارسایی حاد تنفسی (Acute Respiratory Failure)",
          "دیسترس تنفسی حاد (ARDS)",
          "تشدید آسم یا COPD مقاوم به درمان",
          "پنومونی شدید با کاهش اشباع اکسیژن",
          "آمبولی ریه (Pulmonary Embolism)",
          "انسداد راه هوایی (Obstruction of airway)",
          "نیاز به تهویه مکانیکی (Mechanical ventilation)",
        ],
      },

      {
        symptom: "دلایل قلبی‌عروقی (Cardiovascular Causes)",
        subSymptom: [
          "شوک قلبی (Cardiogenic Shock)",
          "سکته قلبی حاد وسیع (Massive Myocardial Infarction)",
          "آریتمی‌های تهدیدکننده حیات (VT/VF, Complete Heart Block)",
          "ایست قلبی (Cardiac Arrest, post-resuscitation care)",
          "نارسایی احتقانی قلب (Acute Decompensated Heart Failure)",
          "پریکاردیت یا تامپوناد قلبی",
          "فشار خون بسیار بالا یا بسیار پایین کنترل‌نشده",
        ],
      },

      {
        symptom: "دلایل نورولوژیک (Neurological Causes)",
        subSymptom: [
          "سکته مغزی (Stroke - Ischemic or Hemorrhagic)",
          "صرع مقاوم یا status epilepticus",
          "ترومای مغزی (Severe Traumatic Brain Injury)",
          "افزایش فشار داخل جمجمه (Increased ICP)",
          "کومای غیرقابل توضیح یا GCS پایین",
          "بیماری‌های نوروموسکولار پیشرفته (مثل گیلن باره)",
        ],
      },

      {
        symptom: "دلایل کلیوی (Renal Causes)",
        subSymptom: [
          "نارسایی حاد کلیوی نیازمند دیالیز اورژانسی",
          "اختلالات شدید الکترولیتی (مثل هایپرکالمی شدید)",
          "اسیدوز متابولیک شدید",
        ],
      },

      {
        symptom: "دلایل گوارشی (Gastrointestinal Causes)",
        subSymptom: [
          "خونریزی گوارشی شدید (GI bleeding with hemodynamic instability)",
          "پانکراتیت حاد شدید (Severe acute pancreatitis)",
          "پریتونیت عمومی یا سپسیس شکمی",
          "انسداد روده با خطر نکروز",
        ],
      },

      {
        symptom: "دلایل عفونی و سپتیک (Infectious/Sepsis)",
        subSymptom: [
          "سپسیس شدید و شوک سپتیک",
          "تب بالا با ناپایداری همودینامیک",
          "اندوکاردیت عفونی با عوارض",
          "پنومونی مقاوم همراه با سپسیس",
        ],
      },

      {
        symptom: "دلایل جراحی و تروما (Surgical/Trauma Causes)",
        subSymptom: [
          "ترومای چندگانه (Polytrauma)",
          "شکستگی لگن یا جمجمه با ناپایداری همودینامیک یا تنفسی",
          "خونریزی داخلی یا خارجی شدید",
          "بعد از جراحی‌های بزرگ مثل جراحی قلب، مغز یا شکم",
        ],
      },

      {
        symptom: "مسمومیت‌ها و اختلالات متابولیک",
        subSymptom: [
          "مسمومیت دارویی یا شیمیایی تهدیدکننده حیات",
          "اسیدوز لاکتیک یا کتواسیدوز دیابتی شدید",
          "هیپوگلیسمی یا هایپرگلیسمی شدید",
          "اختلالات سدیم/پتاسیم شدید",
        ],
      },

      {
        symptom: "سایر دلایل عمومی (Miscellaneous)",
        subSymptom: [
          "سوختگی‌های وسیع (Burns >30% TBSA)",
          "هایپوترمی یا هایپرترمی شدید",
          "بیماران نیازمند مانیتورینگ مداوم به دلایل پیش‌آگهی ضعیف",
        ],
      },
    ],

    // Insurance Information
    insuranceCompany: "",
    insurancePolicyNumber: "",

    // Emergency Contact
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    secondEmergencyContactPhone: "",
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
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [homePhoneNumberError, setHomePhoneNumberError] = useState(false);
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
    } else {
      console.log("🤦 age is Invalid");
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
      setPhoneNumberError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setPhoneNumberError(true);
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
      setHomePhoneNumberError(false);
    } else {
      console.log("🤦 home is Invalid");
      setHomePhoneNumberError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleInsurancePolicyNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^A-Za-z0-9]/g, "");

    const isValid = cleanedValue.length === 10;

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
      console.log("✌️ phone is Valid");
      setEmergencyContactError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setEmergencyContactError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleSecondEmergencyContactPhone = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 11);
    const cleanedValue2 = value.replace(/\D/g, "").slice(0, 10);
    const isValid = /^09\d{9}$/.test(cleanedValue);
    const isValid2 = /^9\d{9}$/.test(cleanedValue2);

    if (isValid || isValid2) {
      console.log("✌️ phone is Valid");
      setSecondEmergencyContactError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setSecondEmergencyContactError(true);
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
    phoneNumberError,
    homePhoneNumberError,
    handleSecondEmergencyContactPhone,
    secondEmergencyContactError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
