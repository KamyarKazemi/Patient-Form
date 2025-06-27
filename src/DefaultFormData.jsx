const defaultFormData = {
  // Personal Information
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  birthDate: "",
  idCode: "",
  phoneNumber: "",
  medicalRecordNumber: "",
  languagePreference: "",
  religionCulturalConsiderations: "",
  advanceDirectives: "",
  legalGuardian: "",

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
  admissionNotes: "",

  // ICU Reasons
  selectedicuAdmissionReasons: "",
  selectedicuAdmissionReasonsSubcategories: [],

  // Diagnoses
  selectedDiagnoses: "",
  selectedDiagnosesSubcategories: [],

  // Comorbidities
  selectedComorbidities: "",
  selectedComorbiditiesSubcategories: [],

  // Surgical History
  selectedSurgicalHistory: "",
  selectedSurgicalHistorySubcategories: [],

  // Used Drugs
  selectedusedDrugs: "",
  selectedusedDrugsSubcategories: [],

  // Drug Allergies
  selecteddrugAllergies: "",
  selecteddrugAllergiesSubcategories: [],
};

export default defaultFormData;
