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

      <div className="input-group">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleName}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleName}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <input
          name="idCode"
          value={formData.idCode}
          onChange={handleIdCode}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <input
          name="medicalRecordNumber"
          value={formData.medicalRecordNumber}
          onChange={handleMedicalRecordNumber}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <input
          name="age"
          value={formData.age}
          onChange={handleAge}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handlePhoneNumber}
          className="form-input"
          required
        />
      </div>

      <div className="input-group">
        <select onChange={handleYearChange} className="form-input">
          {years.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>

        <select onChange={handleMonthChange} className="form-input">
          {months.map((m, i) => (
            <option key={i}>{m}</option>
          ))}
        </select>

        <select
          onChange={handleDayChange}
          disabled={!selectedMonth}
          className="form-input"
        >
          {days.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <textarea
          name="fullAddress"
          value={formData.fullAddress}
          onChange={handleInputChange}
          className="form-input"
          required
        />
      </div>

      <h2>اطلاعات بیمه</h2>

      <div className="input-group">
        <select
          name="insuranceCompany"
          value={formData.insuranceCompany}
          onChange={handleInputChange}
          className="form-input"
        >
          {formData.insuranceCompanyOptions.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <input
          name="insurancePolicyNumber"
          value={formData.insurancePolicyNumber}
          onChange={handleInsurancePolicyNumber}
          className="form-input"
        />
      </div>

      <h2>تماس اضطراری</h2>

      <div className="input-group">
        <input
          name="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <input
          name="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={handleEmergencyContactPhone}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <input
          name="secondEmergencyContactPhone"
          value={formData.secondEmergencyContactPhone}
          onChange={handleSecondEmergencyContactPhone}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <textarea
          name="emergencyContactAddress"
          value={formData.emergencyContactAddress}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>

      <h2>ارزیابی بالینی</h2>

      <div className="input-group">
        <input
          name="admissionWeight"
          value={formData.admissionWeight}
          onChange={handleWeight}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <input
          name="admissionHeight"
          value={formData.admissionHeight}
          onChange={handleHeight}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <textarea
          name="vitalSignsOnAdmission"
          value={formData.vitalSignsOnAdmission}
          onChange={handleVitalSigns}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <input
          name="glasgowComaScale"
          value={formData.glasgowComaScale}
          onChange={handleGlasgowComaScale}
          className="form-input"
        />
      </div>

      <div className="input-group">
        <input
          name="apacheScore"
          value={formData.apacheScore}
          onChange={handleApacheScore}
          className="form-input"
        />
      </div>

      <button type="submit">مرحله بعد</button>
    </form>
  );
}

export default FirstPage;
