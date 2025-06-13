import { GoDot, GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FormContext from "./FormContext";

function FirstPage() {
  const {
    formData,
    handleInputChange,
    handleIdCode,
    handleName,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    idError,
  } = useContext(FormContext);

  return (
    <>
      <form className="container card" dir="rtl">
        <h1>مرحله اول</h1>
        <h1>اطلاعات هویتی بیمار</h1>

        <div className="input-group">
          <label htmlFor="firstName" className="form-label">
            نام
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
            value={formData.firstName}
            onChange={handleName}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastName" className="form-label">
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            value={formData.lastName}
            onChange={handleName}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="idCode" className="form-label">
            کد ملی
          </label>
          <input
            type="text"
            id="idCode"
            name="idCode"
            pattern="\d{10}"
            inputMode="numeric"
            maxLength={10}
            className="form-input"
            value={formData.idCode}
            onChange={handleIdCode}
            required
          />
          {idError ? (
            <div className="idError">
              <p>hello</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="age" className="form-label">
            سن بیمار
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-input"
            min="0"
            max="130"
            value={formData.age}
            onChange={handleAge}
            required
          />
          {idError ? (
            <div className="idError">
              <p>hello</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="phone" className="form-label">
            شماره تماس
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handlePhoneNumber}
            required
          />
          {idError ? (
            <div className="idError">
              <p>hello</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber" className="form-label">
            شماره تلفن
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="homePhoneNumber"
            pattern="09\d{9}"
            className="form-input"
            value={formData.homePhoneNumber}
            onChange={handleHomePhoneNumber}
            required
          />
          {idError ? (
            <div className="idError">
              <p>hello</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label className="form-label date-label">تاریخ تولد (شمسی)</label>

          <div className="persian-date-container">
            <select className="form-input date-select" required>
              <option value="">سال</option>
            </select>

            <select className="form-input date-select" required>
              <option value="">ماه</option>
            </select>

            <select className="form-input date-select" required disabled>
              <option value="">روز</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="fullAddress" className="form-label">
            آدرس کامل
          </label>
          <textarea
            type="text"
            id="fullAddress"
            name="fullAddress"
            className="form-input"
            value={formData.fullAdderess}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <GoDot />
          <GoDot />
          <GoDotFill />
        </div>
      </form>
    </>
  );
}

export default FirstPage;
