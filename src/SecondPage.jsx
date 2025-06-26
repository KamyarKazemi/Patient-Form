import { useContext } from "react";
import FormContext from "./FormContext";
import axios from "axios";

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
  } = useContext(FormContext);

  const handleForm = async (e) => {
    e.preventDefault();
    if (isAnyError) return alert("خطا در اطلاعات!");
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/submit",
        formData
      );
      console.log("✅ Submitted:", response.data);
      alert("اطلاعات با موفقیت ارسال شد");
    } catch (error) {
      console.error("❌ Error submitting:", error);
      alert("ارسال اطلاعات با خطا مواجه شد");
    }
  };

  return (
    <form className="container card" onSubmit={handleForm} dir="rtl">
      <h1>مرحله دوم</h1>
      <h2 className="h2-form">اطلاعات پزشکی بیمار</h2>

      {/* ICU Reason Select */}
      <div className="input-group">
        <label htmlFor="icu-reason">علت ارجاع به ICU</label>
        <select
          name="icu-reason"
          id="icu-reason"
          onChange={handleSymptom}
          className="form-input"
        >
          {formData.baseIcuReason.map((item, index) => (
            <option key={index} value={item.symptom}>
              {item.symptom}
            </option>
          ))}
        </select>
      </div>

      {selectedItem && (
        <div className="checkbox-container">
          {selectedItem.subSymptom.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={`subSymptom-${index}`} value={sub} />
              <label htmlFor={`subSymptom-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* Diagnosis */}
      <div className="input-group">
        <label htmlFor="firstDiagnosis">تشخیص اولیه پزشک</label>
        <select
          id="firstDiagnosis"
          onChange={handleDiagnosis}
          className="form-input"
        >
          {formData.firstDiagnosis.map((item, index) => (
            <option key={index} value={item.diagnosis}>
              {item.diagnosis}
            </option>
          ))}
        </select>
      </div>

      {selectedSubDiagnosis && (
        <div className="checkbox-container">
          {selectedSubDiagnosis.subDiagnosis.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={`subDiagnosis-${index}`} value={sub} />
              <label htmlFor={`subDiagnosis-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* Comorbidities */}
      <div className="input-group">
        <label htmlFor="comorbidities">سابقه بیماری‌های زمینه‌ای</label>
        <select
          id="comorbidities"
          onChange={handleComorbiditie}
          className="form-input"
        >
          {formData.comorbidities.map((item, index) => (
            <option key={index} value={item.comorbiditie}>
              {item.comorbiditie}
            </option>
          ))}
        </select>
      </div>

      {selectedSubComorbiditie && (
        <div className="checkbox-container">
          {selectedSubComorbiditie.subComorbiditie.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input
                type="checkbox"
                id={`subComorbiditie-${index}`}
                value={sub}
              />
              <label htmlFor={`subComorbiditie-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* Surgical History */}
      <div className="input-group">
        <label htmlFor="surgicalHistory">سوابق جراحی</label>
        <select
          id="surgicalHistory"
          onChange={handleHistory}
          className="form-input"
        >
          {formData.surgicalHistories.map((item, index) => (
            <option key={index} value={item.history}>
              {item.history}
            </option>
          ))}
        </select>
      </div>

      {selectedSubSurgicalHistory && (
        <div className="checkbox-container">
          {selectedSubSurgicalHistory.subHistory.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input
                type="checkbox"
                id={`subSurgicalHistory-${index}`}
                value={sub}
              />
              <label htmlFor={`subSurgicalHistory-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* Medications */}
      <div className="input-group">
        <label htmlFor="usedDrugs">داروهای مصرفی</label>
        <select id="usedDrugs" onChange={handleDrugs} className="form-input">
          {formData.usedDrugs.map((item, index) => (
            <option key={index} value={item.drug}>
              {item.drug}
            </option>
          ))}
        </select>
      </div>

      {selectedSubDrugs && (
        <div className="checkbox-container">
          {selectedSubDrugs.subDrug.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={`subDrug-${index}`} value={sub} />
              <label htmlFor={`subDrug-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* Drug Allergies */}
      <div className="input-group">
        <label htmlFor="drugAllergies">آلرژی دارویی</label>
        <select
          id="drugAllergies"
          onChange={handleAllergies}
          className="form-input"
        >
          {formData.drugAllergies.map((item, index) => (
            <option key={index} value={item.allergy}>
              {item.allergy}
            </option>
          ))}
        </select>
      </div>

      {selectedSubAllergies && (
        <div className="checkbox-container">
          {selectedSubAllergies.subAllergy.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={`subAllergy-${index}`} value={sub} />
              <label htmlFor={`subAllergy-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      {/* ICU Admission Reasons */}
      <div className="input-group">
        <label htmlFor="icuAdmissionReasons">دلایل بستری در ICU</label>
        <select
          id="icuAdmissionReasons"
          onChange={handleAdmissionReasons}
          className="form-input"
        >
          {formData.icuAdmissionReasons.map((item, index) => (
            <option key={index} value={item.reason}>
              {item.reason}
            </option>
          ))}
        </select>
      </div>

      {selectedSubAdmissionReasons && (
        <div className="checkbox-container">
          {selectedSubAdmissionReasons.subReason.map((sub, index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={`subReason-${index}`} value={sub} />
              <label htmlFor={`subReason-${index}`}>{sub}</label>
            </div>
          ))}
        </div>
      )}

      <button className="form-button">مرحله بعد</button>
      <div className="dots">
        <Link to="/second">
          <GoDotFill />
        </Link>
        <Link to="/">
          <GoDot />
        </Link>
      </div>
    </form>
  );
}

export default SecondPage;
