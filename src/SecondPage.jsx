import { GoDot, GoDotFill } from "react-icons/go";
import { useContext } from "react";
import FormContext from "./FormContext";
import { useNavigate, Link } from "react-router-dom";

function SecondPage() {
  const {
    formData,
    handleSymptom,
    selectedItem,
    handleDiagnosis,
    selectedSubDiagnosis,
    selectedSubComorbiditie,
    handleComorbiditie,
    handleHistory,
    selectedSubSurgicalHistory,
    handleAdmissionReasons,
    selectedSubAdmissionReasons,
    handleDrugs,
    selectedSubDrugs,
    handleAllergies,
    selectedSubAllergies,
    isAnyError,
    sendItems,
  } = useContext(FormContext);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (isAnyError) {
      alert("sth is weeehhhh!");
    } else {
      alert("sth is wooohhhh");
      sendItems();
    }
  };

  return (
    <>
      <form className="container card" onSubmit={handleForm} dir="rtl">
        <h1>مرحله دوم</h1>
        <h2 className="h2-form">اطلاعات پزشکی بیمار</h2>
        <div className="input-group">
          <label htmlFor="icu-reason" className="form-label">
            علت ارجاع به ICU
          </label>
          <select
            name="icu-reason"
            id="icu-reason"
            className="form-input"
            onChange={handleSymptom}
          >
            {formData.baseIcuReason.map((item, index) => (
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
            {formData.vitalSigns.map((item, index) => (
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
            {formData.firstDiagnosis.map((item, index) => (
              <option key={index} value={item.diagnosis}>
                {item.diagnosis}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {formData.selectedSubDiagnosis && (
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
            {formData.comorbidities.map((item, index) => (
              <option value={item.comorbiditie} key={index}>
                {item.comorbiditie}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {formData.selectedSubComorbiditie && (
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
            {formData.surgicalHistories.map((item, index) => (
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

        <div className="input-group">
          <label htmlFor="usedDrugs">دارو های مصرفی</label>
          <select
            name="usedDrugs"
            id="usedDrugs"
            className="form-input"
            onChange={handleDrugs}
          >
            {formData.usedDrugs.map((item, index) => (
              <option value={item.drug} key={index}>
                {item.drug}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubDrugs && (
            <div className="checkbox-container">
              {selectedSubDrugs.subDrug.map((sub, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    name="subDrug"
                    id={`subDrug-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subDrug-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="drugAllergies">آلرژی دارویی</label>
          <select
            name="drugAllergies"
            id="drugAllergies"
            className="form-input"
            onChange={handleAllergies}
          >
            {formData.drugAllergies.map((item, index) => (
              <option value={item.allergy} key={index}>
                {item.allergy}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubAllergies && (
            <div className="checkbox-container">
              {selectedSubAllergies.subAllergy.map((sub, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    name="subAllergy"
                    id={`subAllergy-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subAllergy-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="icuAdmissionReasons">دلایل بستری در ICU</label>
          <select
            name="icuAdmissionReasons"
            id="icuAdmissionReasons"
            className="form-input"
            onChange={handleAdmissionReasons}
          >
            {formData.icuAdmissionReasons.map((item, index) => (
              <option value={item.reason} key={index}>
                {item.reason}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox">
          {selectedSubAdmissionReasons && (
            <div className="checkbox-container">
              {selectedSubAdmissionReasons.subReason.map((sub, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    name="subReason"
                    id={`subReason-${index}`}
                    value={sub}
                  />
                  <label htmlFor={`subReason-${index}`}>{sub}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="form-button">مرحله بعد</button>
        <div className="dots">
          <Link to="/third">
            <GoDot />
          </Link>
          <Link to="/second">
            <GoDotFill />
          </Link>
          <Link to="/">
            <GoDot />
          </Link>
        </div>
      </form>
    </>
  );
}

export default SecondPage;
