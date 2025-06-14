import { GoDot, GoDotFill } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import FormContext from "./FormContext";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const {
    formData,
    handleInputChange,
    handleIdCode,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    baseIcuReason,
    selectedSymptom,
    handleSymptom,
    selectedItem,
    idError,
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
      </form>
    </>
  );
}

export default SecondPage;
