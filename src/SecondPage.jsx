import { useContext } from "react";
import FormContext from "./FormContext";
import { Link } from "react-router-dom";

function SecondPage() {
  const {
    formData,
    postFormData, // Use your existing API function
    handleMainCategoryChange,
    handleCheckboxChange,
    isAnyError,
    def,
  } = useContext(FormContext);

  const handleForm = async (e) => {
    e.preventDefault();
    if (isAnyError) {
      alert("خطا در اطلاعات!");
      return;
    }

    // Use your existing postFormData function
    const result = await postFormData();

    if (result.success) {
      alert("اطلاعات با موفقیت ارسال شد");
      console.log("✅ Complete data sent to API:", formData);
    } else {
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
          value={def.selectedIcuReason}
          onChange={(e) =>
            handleMainCategoryChange("IcuReason", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.baseIcuReason.map((item, index) => (
            <option key={index} value={item.symptom}>
              {item.symptom}
            </option>
          ))}
        </select>
      </div>

      {/* ICU Sub-reasons Checkboxes */}
      {def.selectedIcuReason && (
        <div className="checkbox-container">
          <h4>انتخاب علائم مرتبط:</h4>
          {def.baseIcuReason
            .find((item) => item.symptom === def.selectedIcuReason)
            ?.subSymptom.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subSymptom-${index}`}
                  value={sub}
                  checked={def.selectedIcuSubReasons.includes(sub)}
                  onChange={(e) =>
                    handleCheckboxChange("IcuReason", sub, e.target.checked)
                  }
                />
                <label htmlFor={`subSymptom-${index}`}>{sub}</label>
              </div>
            ))}
        </div>
      )}

      {/* Primary Diagnosis */}
      <div className="input-group">
        <label htmlFor="firstDiagnosis">تشخیص اولیه پزشک</label>
        <select
          id="firstDiagnosis"
          value={def.selectedPrimaryDiagnosis}
          onChange={(e) =>
            handleMainCategoryChange("PrimaryDiagnosis", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.firstDiagnosis.map((item, index) => (
            <option key={index} value={item.diagnosis}>
              {item.diagnosis}
            </option>
          ))}
        </select>
      </div>

      {/* Diagnosis Subcategories */}
      {def.selectedPrimaryDiagnosis && (
        <div className="checkbox-container">
          <h4>انتخاب تشخیص‌های فرعی:</h4>
          {def.firstDiagnosis
            .find((item) => item.diagnosis === def.selectedPrimaryDiagnosis)
            ?.subDiagnosis.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subDiagnosis-${index}`}
                  value={sub}
                  checked={def.selectedDiagnosisSubcategories.includes(sub)}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "PrimaryDiagnosis",
                      sub,
                      e.target.checked
                    )
                  }
                />
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
          value={def.selectedComorbidity}
          onChange={(e) =>
            handleMainCategoryChange("Comorbidity", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.comorbidities.map((item, index) => (
            <option key={index} value={item.comorbiditie}>
              {item.comorbiditie}
            </option>
          ))}
        </select>
      </div>

      {/* Comorbidities Subcategories */}
      {def.selectedComorbidity && (
        <div className="checkbox-container">
          <h4>انتخاب بیماری‌های زمینه‌ای:</h4>
          {def.comorbidities
            .find((item) => item.comorbiditie === def.selectedComorbidity)
            ?.subComorbiditie.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subComorbiditie-${index}`}
                  value={sub}
                  checked={def.selectedComorbiditiesSubcategories.includes(sub)}
                  onChange={(e) =>
                    handleCheckboxChange("Comorbidity", sub, e.target.checked)
                  }
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
          value={def.selectedSurgicalHistory}
          onChange={(e) =>
            handleMainCategoryChange("SurgicalHistory", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.surgicalHistories.map((item, index) => (
            <option key={index} value={item.history}>
              {item.history}
            </option>
          ))}
        </select>
      </div>

      {/* Surgical History Subcategories */}
      {def.selectedSurgicalHistory && (
        <div className="checkbox-container">
          <h4>انتخاب سوابق جراحی:</h4>
          {def.surgicalHistories
            .find((item) => item.history === def.selectedSurgicalHistory)
            ?.subHistory.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subSurgicalHistory-${index}`}
                  value={sub}
                  checked={def.selectedSurgicalHistorySubcategories.includes(
                    sub
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "SurgicalHistory",
                      sub,
                      e.target.checked
                    )
                  }
                />
                <label htmlFor={`subSurgicalHistory-${index}`}>{sub}</label>
              </div>
            ))}
        </div>
      )}

      {/* Medications */}
      <div className="input-group">
        <label htmlFor="usedDrugs">داروهای مصرفی</label>
        <select
          id="usedDrugs"
          value={def.selectedMedication}
          onChange={(e) =>
            handleMainCategoryChange("Medication", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.usedDrugs.map((item, index) => (
            <option key={index} value={item.drug}>
              {item.drug}
            </option>
          ))}
        </select>
      </div>

      {/* Medication Subcategories */}
      {def.selectedMedication && (
        <div className="checkbox-container">
          <h4>انتخاب داروها:</h4>
          {def.usedDrugs
            .find((item) => item.drug === def.selectedMedication)
            ?.subDrug.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subDrug-${index}`}
                  value={sub}
                  checked={def.selectedMedicationSubcategories.includes(sub)}
                  onChange={(e) =>
                    handleCheckboxChange("Medication", sub, e.target.checked)
                  }
                />
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
          value={def.selectedDrugAllergy}
          onChange={(e) =>
            handleMainCategoryChange("DrugAllergy", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.drugAllergies.map((item, index) => (
            <option key={index} value={item.allergy}>
              {item.allergy}
            </option>
          ))}
        </select>
      </div>

      {/* Allergy Subcategories */}
      {def.selectedDrugAllergy && (
        <div className="checkbox-container">
          <h4>انتخاب آلرژی‌ها:</h4>
          {def.drugAllergies
            .find((item) => item.allergy === def.selectedDrugAllergy)
            ?.subAllergy.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subAllergy-${index}`}
                  value={sub}
                  checked={def.selectedAllergySubcategories.includes(sub)}
                  onChange={(e) =>
                    handleCheckboxChange("DrugAllergy", sub, e.target.checked)
                  }
                />
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
          value={def.selectedIcuAdmissionReason}
          onChange={(e) =>
            handleMainCategoryChange("IcuAdmissionReason", e.target.value)
          }
          className="form-input"
        >
          <option value="">انتخاب کنید</option>
          {def.icuAdmissionReasons.map((item, index) => (
            <option key={index} value={item.reason}>
              {item.reason}
            </option>
          ))}
        </select>
      </div>

      {/* ICU Admission Reason Subcategories */}
      {def.selectedIcuAdmissionReason && (
        <div className="checkbox-container">
          <h4>انتخاب دلایل بستری:</h4>
          {def.icuAdmissionReasons
            .find((item) => item.reason === def.selectedIcuAdmissionReason)
            ?.subReason.map((sub, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`subReason-${index}`}
                  value={sub}
                  checked={def.selectedAdmissionReasonSubcategories.includes(
                    sub
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "IcuAdmissionReason",
                      sub,
                      e.target.checked
                    )
                  }
                />
                <label htmlFor={`subReason-${index}`}>{sub}</label>
              </div>
            ))}
        </div>
      )}

      <button className="form-button" type="submit">
        ارسال اطلاعات
      </button>
    </form>
  );
}

export default SecondPage;
