import { GoDot, GoDotFill } from "react-icons/go";
import { useContext } from "react";
import FormContext from "./FormContext";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const {
    // formData,
    // handleInputChange,
    // handleIdCode,
    // handleAge,
    // handlePhoneNumber,
    // handleHomePhoneNumber,
    baseIcuReason,
    handleSymptom,
    selectedItem,
    vitalSigns,
    firstDiagnosis,
    // selectedDiagnosis,
    handleDiagnosis,
    selectedSubDiagnosis,
    comorbidities,
    selectedComorbiditie,
    selectedSubComorbiditie,
    handleComorbiditie,
    selectedSurgicalHistory,
    surgicalHistories,
    handleHistory,
    selectedSubSurgicalHistory,
    // idError,
    isAnyError,
  } = useContext(FormContext);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (isAnyError) {
      alert("sth is weeehhhh!");
    } else {
      alert("sth is wooohhhh");
      navigate("/second");
    }
  };

  return (
    <>
      <form className="container card" onSubmit={handleForm} dir="rtl">
        <h1>مرحله دوم</h1>
        <h2>اطلاعات پزشکی بیمار</h2>
        <div className="input-group">
          <label htmlFor="icu-reason">علت ارجاع به ICU</label>
          <select
            name="icu-reason"
            id="icu-reason"
            className="form-input"
            onChange={handleSymptom}
          >
            {baseIcuReason.map((item, index) => (
              <option key={index} value={item.symptom}>
                {item.symptom}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedItem && (
            <div className="checkbox-container">
              {selectedItem.subSymptom.map((sub, index) => (
                <div key={index} className="checkbox-item">
                  <input
                    type="checkbox"
                    name="subSymptom"
                    id={`subSymptom-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subSymptom-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="vitalSigns">وضعیت علاعم حیاتی</label>
          <select name="vitalSigns" id="vitalSigns" className="form-input">
            {vitalSigns.map((item, index) => (
              <option key={index} value={item.sign}>
                {item.sign}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="firstDiagnosis">تشخیص اولیه پزشک</label>
          <select
            name="firstDiagnosis"
            id="firstDiagnosis"
            className="form-input"
            onChange={handleDiagnosis}
          >
            {firstDiagnosis.map((item, index) => (
              <option key={index} value={item.diagnosis}>
                {item.diagnosis}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubDiagnosis && (
            <div className="checkbox-container">
              {selectedSubDiagnosis.subDiagnosis.map((sub, index) => (
                <div key={index} className="checkbox-item">
                  <input
                    type="checkbox"
                    name="subDiagnosis"
                    value={sub}
                    id={`subDiagnosis-${index}`}
                  />
                  <label htmlFor={`subDiagnosis-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="comobordities"> سابقه بیماری‌های زمینه‌ای</label>
          <select
            name="comobordities"
            id="comobordities"
            className="form-input"
            onChange={handleComorbiditie}
          >
            {comorbidities.map((item, index) => (
              <option value={item.comorbiditie} key={index}>
                {item.comorbiditie}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubComorbiditie && (
            <div className="checkbox-container">
              {selectedSubComorbiditie.subComorbiditie.map((sub, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    name="subComorbiditie"
                    id={`subComorbiditie-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subComorbiditie-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="surgicalHistory">سوابق جراحی</label>
          <select
            name="surgicalHistory"
            id="surgicalHistory"
            className="form-input"
            onChange={handleHistory}
          >
            {surgicalHistories.map((item, index) => (
              <option key={index} value={item.history}>
                {item.history}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubSurgicalHistory && (
            <div className="checkbox-container">
              {selectedSubSurgicalHistory.subHistory.map((sub, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    name="subSurgicalHistory"
                    id={`subSurgicalHistory-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subSurgicalHistory-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="form-button">مرحله بعد</button>
        <div>
          <GoDot />
          <GoDot />
          <GoDotFill />
        </div>
      </form>
    </>
  );
}

export default SecondPage;
