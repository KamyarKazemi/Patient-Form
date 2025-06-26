import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import FormContext from "./FormContext";

function FirstPage() {
  const {
    setYears,
    formData,
    handleInputChange,
    handleIdCode,
    handleName,
    handleAge,
    handlePhoneNumber,
    handleMedicalRecordNumber,
    handleInsurancePolicyNumber,
    handleEmergencyContactPhone,
    handleSecondEmergencyContactPhone,
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
    isAnyError,
    handleYearChange,
    years,
    handleMonthChange,
    months,
    selectedMonth,
    handleDayChange,
    days,
  } = useContext(FormContext);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (isAnyError) {
      alert("لطفا اطلاعات را به درستی وارد کنید!");
      return;
    }
    navigate("/second");
  };

  useEffect(() => {
    const yearList = [];
    for (let y = 1300; y <= 1404; y++) yearList.push(y);
    setYears(yearList);
  }, []);

  return (
    <form className="container card" onSubmit={handleForm}>
      <h1>مرحله اول</h1>
      <h2>اطلاعات هویتی بیمار</h2>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleName}
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleName}
        required
      />
      <input
        name="idCode"
        value={formData.idCode}
        onChange={handleIdCode}
        required
      />
      <input
        name="medicalRecordNumber"
        value={formData.medicalRecordNumber}
        onChange={handleMedicalRecordNumber}
        required
      />
      <input name="age" value={formData.age} onChange={handleAge} required />
      <input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handlePhoneNumber}
        required
      />

      {/* Persian Birth Date */}
      <select onChange={handleYearChange}>
        {years.map((y) => (
          <option key={y}>{y}</option>
        ))}
      </select>
      <select onChange={handleMonthChange}>
        {months.map((m, i) => (
          <option key={i}>{m}</option>
        ))}
      </select>
      <select onChange={handleDayChange} disabled={!selectedMonth}>
        {days.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <textarea
        name="fullAddress"
        value={formData.fullAddress}
        onChange={handleInputChange}
        required
      />

      {/* Info skipped here: knownAllergies, currentMedications, medicalHistory, previousICUAdmissions → now in SecondPage */}

      <h2>اطلاعات بیمه</h2>
      <select
        name="insuranceCompany"
        value={formData.insuranceCompany}
        onChange={handleInputChange}
      >
        {formData.insuranceCompanyOptions.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
      <input
        name="insurancePolicyNumber"
        value={formData.insurancePolicyNumber}
        onChange={handleInsurancePolicyNumber}
      />

      <h2>تماس اضطراری</h2>
      <input
        name="emergencyContactName"
        value={formData.emergencyContactName}
        onChange={handleInputChange}
      />
      <input
        name="emergencyContactPhone"
        value={formData.emergencyContactPhone}
        onChange={handleEmergencyContactPhone}
      />
      <input
        name="secondEmergencyContactPhone"
        value={formData.secondEmergencyContactPhone}
        onChange={handleSecondEmergencyContactPhone}
      />
      <textarea
        name="emergencyContactAddress"
        value={formData.emergencyContactAddress}
        onChange={handleInputChange}
      />

      <h2>ارزیابی بالینی</h2>
      <input
        name="admissionWeight"
        value={formData.admissionWeight}
        onChange={handleWeight}
      />
      <input
        name="admissionHeight"
        value={formData.admissionHeight}
        onChange={handleHeight}
      />
      <textarea
        name="vitalSignsOnAdmission"
        value={formData.vitalSignsOnAdmission}
        onChange={handleVitalSigns}
      />
      <input
        name="glasgowComaScale"
        value={formData.glasgowComaScale}
        onChange={handleGlasgowComaScale}
      />
      <input
        name="apacheScore"
        value={formData.apacheScore}
        onChange={handleApacheScore}
      />
      <button type="submit">مرحله بعد</button>
    </form>
  );
}

export default FirstPage;
