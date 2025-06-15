import { GoDot, GoDotFill } from "react-icons/go";
import { useContext, useEffect } from "react";
import FormContext from "./FormContext";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const {
    formData,
    handleInputChange,
    handleIdCode,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    setYears,
    handleYearChange,
    years,
    handleMonthChange,
    months,
    selectedMonth,
    days,
    handleDayChange,
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

  useEffect(() => {
    const yearList = [];
    for (let y = 1300; y <= 1404; y++) {
      yearList.push(y);
    }
    setYears(yearList);
  }, []);

  ///

  return (
    <>
      <form className="container card" onSubmit={handleForm} dir="rtl">
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
          <label htmlFor="homePhoneNumber" className="form-label">
            شماره تلفن
          </label>
          <input
            type="tel"
            id="homePhoneNumber"
            name="homePhoneNumber"
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
            <select
              className="form-input date-select"
              required
              onChange={handleYearChange}
            >
              <option value="">سال</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <select
              className="form-input date-select"
              required
              onChange={handleMonthChange}
            >
              <option value="">ماه</option>
              {months.map((m, i) => (
                <option key={i + 1} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>

            <select
              className="form-input date-select"
              required
              disabled={!selectedMonth}
              onChange={handleDayChange}
            >
              <option value="">روز</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
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
            name="fullAdderess"
            className="form-input"
            value={formData.fullAdderess}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="form-button">مرحله بعد</button>
      </form>
    </>
  );
}

export default FirstPage;
