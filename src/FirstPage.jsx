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
    handleMedicalRecordNumber,
    handleInsurancePolicyNumber,
    handleEmergencyContactPhone,
    handleSecondEmergencyContactPhone,
    secondEmergencyContactError,
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
    homePhoneNumberError,
  } = useContext(FormContext);

  return (
    <>
      <form className="container card" dir="rtl">
        {/* Patient Identity Section */}
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
              <p>کد ملی نامعتبر است</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="medicalRecordNumber" className="form-label">
            شماره پرونده پزشکی
          </label>
          <input
            type="text"
            id="medicalRecordNumber"
            name="medicalRecordNumber"
            className="form-input"
            value={formData.medicalRecordNumber}
            onChange={handleMedicalRecordNumber}
            required
          />
          {medicalRecordError ? (
            <div className="idError">
              <p>شماره پرونده پزشکی نامعتبر است</p>
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
          {phoneNumberError ? (
            <div className="idError">
              <p>شماره تماس نامعتبر است</p>
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
          {homePhoneNumberError ? (
            <div className="idError">
              <p>شماره تلفن نامعتبر است</p>
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
            value={formData.fullAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Medical Information Section */}
        <h1>اطلاعات پزشکی</h1>

        <div className="input-group">
          <label htmlFor="admissionDateTime" className="form-label">
            تاریخ و زمان پذیرش
          </label>
          <input
            type="datetime-local"
            id="admissionDateTime"
            name="admissionDateTime"
            className="form-input"
            value={formData.admissionDateTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="referringPhysician" className="form-label">
            پزشک ارجاع دهنده
          </label>
          <input
            type="text"
            id="referringPhysician"
            name="referringPhysician"
            className="form-input"
            value={formData.referringPhysician}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="primaryDiagnosis" className="form-label">
            تشخیص اولیه
          </label>
          <textarea
            id="primaryDiagnosis"
            name="primaryDiagnosis"
            className="form-input"
            value={formData.primaryDiagnosis}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="knownAllergies" className="form-label">
            حساسیت‌های شناخته شده
          </label>
          <textarea
            id="knownAllergies"
            name="knownAllergies"
            className="form-input"
            value={formData.knownAllergies}
            onChange={handleInputChange}
            placeholder="در صورت عدم وجود حساسیت، 'ندارد' بنویسید"
          />
        </div>

        <div className="input-group">
          <label htmlFor="currentMedications" className="form-label">
            داروهای فعلی
          </label>
          <textarea
            id="currentMedications"
            name="currentMedications"
            className="form-input"
            value={formData.currentMedications}
            onChange={handleInputChange}
            placeholder="نام دارو، دوز و فراوانی مصرف را ذکر کنید"
          />
        </div>

        <div className="input-group">
          <label htmlFor="medicalHistory" className="form-label">
            سابقه پزشکی / بیماری‌های مزمن
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            className="form-input"
            value={formData.medicalHistory}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="previousICUAdmissions" className="form-label">
            سابقه بستری در ICU
          </label>
          <textarea
            id="previousICUAdmissions"
            name="previousICUAdmissions"
            className="form-input"
            value={formData.previousICUAdmissions}
            onChange={handleInputChange}
            placeholder="تاریخ و دلیل بستری قبلی"
          />
        </div>

        {/* Insurance Information */}
        <h1>اطلاعات بیمه</h1>

        <div className="input-group">
          <label htmlFor="insuranceCompany" className="form-label">
            شرکت بیمه
          </label>
          <select
            id="insuranceCompany"
            name="insuranceCompany"
            className="form-input"
            value={formData.insuranceCompany}
            onChange={handleInputChange}
            required
          >
            <option value="">انتخاب کنید</option>
            {formData.insuranceCompanyOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="insurancePolicyNumber" className="form-label">
            شماره بیمه‌نامه
          </label>
          <input
            type="text"
            id="insurancePolicyNumber"
            name="insurancePolicyNumber"
            className="form-input"
            value={formData.insurancePolicyNumber}
            onChange={handleInsurancePolicyNumber}
          />
          {insuranceError ? (
            <div className="idError">
              <p>شماره بیمه‌نامه باید 10 رقم باشد</p>
            </div>
          ) : null}
        </div>

        {/* Emergency Contact Section */}
        <h1>اطلاعات تماس اضطراری</h1>

        <div className="input-group">
          <label htmlFor="emergencyContactName" className="form-label">
            نام تماس اضطراری
          </label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            className="form-input"
            value={formData.emergencyContactName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="emergencyContactRelationship" className="form-label">
            نسبت با بیمار
          </label>
          <select
            id="emergencyContactRelationship"
            name="emergencyContactRelationship"
            className="form-input"
            value={formData.emergencyContactRelationship}
            onChange={handleInputChange}
            required
          >
            <option value="">انتحاب کنید</option>
            {formData.emergencyContactRelationshipOptions.map((item, index) => (
              <>
                <option value={item} key={index}>
                  {item}
                </option>
              </>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="emergencyContactPhone" className="form-label">
            شماره تماس اضطراری
          </label>
          <input
            type="tel"
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            className="form-input"
            value={formData.emergencyContactPhone}
            onChange={handleEmergencyContactPhone}
            required
          />
          {emergencyContactError ? (
            <div className="idError">
              <p>شماره تماس اضطراری نامعتبر است</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="emergencyContactPhone2" className="form-label">
            شماره تماس اضطراری دوم (اختیاری)
          </label>
          <input
            type="tel"
            id="emergencyContactPhone2"
            name="emergencyContactPhone2"
            className="form-input"
            value={formData.emergencyContactPhone2}
            onChange={handleSecondEmergencyContactPhone}
          />
        </div>

        {secondEmergencyContactError ? (
          <div className="idError">
            <p>شماره تماس اضطراری نامعتبر است</p>
          </div>
        ) : null}

        <div className="input-group">
          <label htmlFor="emergencyContactAddress" className="form-label">
            آدرس تماس اضطراری
          </label>
          <textarea
            id="emergencyContactAddress"
            name="emergencyContactAddress"
            className="form-input"
            value={formData.emergencyContactAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Clinical Assessment Section */}
        <h1>ارزیابی بالینی</h1>

        <div className="input-group">
          <label htmlFor="admissionWeight" className="form-label">
            وزن هنگام پذیرش (کیلوگرم)
          </label>
          <input
            type="number"
            id="admissionWeight"
            name="admissionWeight"
            className="form-input"
            min="0"
            max="500"
            step="0.1"
            value={formData.admissionWeight}
            onChange={handleWeight}
          />
          {weightError ? (
            <div className="idError">
              <p>وزن نامعتبر است</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="admissionHeight" className="form-label">
            قد هنگام پذیرش (سانتی‌متر)
          </label>
          <input
            type="number"
            id="admissionHeight"
            name="admissionHeight"
            className="form-input"
            min="0"
            max="300"
            value={formData.admissionHeight}
            onChange={handleHeight}
          />
          {heightError ? (
            <div className="idError">
              <p>قد نامعتبر است</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="vitalSignsOnAdmission" className="form-label">
            علائم حیاتی هنگام پذیرش
          </label>
          <textarea
            id="vitalSignsOnAdmission"
            name="vitalSignsOnAdmission"
            className="form-input"
            value={formData.vitalSignsOnAdmission}
            onChange={handleVitalSigns}
            placeholder="فشار خون، ضربان قلب، تنفس، دما، اکسیژن خون"
          />
          {vitalSignsError ? (
            <div className="idError">
              <p>علائم حیاتی باید کامل باشد</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="glasgowComaScale" className="form-label">
            مقیاس کمای گلاسکو (GCS)
          </label>
          <input
            type="number"
            id="glasgowComaScale"
            name="glasgowComaScale"
            className="form-input"
            min="3"
            max="15"
            value={formData.glasgowComaScale}
            onChange={handleGlasgowComaScale}
          />
          {glasgowError ? (
            <div className="idError">
              <p>مقیاس GCS باید بین 3 تا 15 باشد</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="apacheScore" className="form-label">
            امتیاز APACHE II
          </label>
          <input
            type="number"
            id="apacheScore"
            name="apacheScore"
            className="form-input"
            min="0"
            max="71"
            value={formData.apacheScore}
            onChange={handleApacheScore}
          />
          {apacheError ? (
            <div className="idError">
              <p>امتیاز APACHE II باید بین 0 تا 71 باشد</p>
            </div>
          ) : null}
        </div>

        <div className="input-group">
          <label htmlFor="ventilatorRequirements" className="form-label">
            نیاز به دستگاه تنفس مصنوعی
          </label>
          <select
            id="ventilatorRequirements"
            name="ventilatorRequirements"
            className="form-input"
            value={formData.ventilatorRequirements}
            onChange={handleInputChange}
          >
            <option value="">انتحاب کنید</option>

            {formData.ventilatorRequirementsOptions.map((item, index) => (
              <>
                <option value={item} key={index}>
                  {item}
                </option>
              </>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="isolationPrecautions" className="form-label">
            احتیاطات ایزولاسیون
          </label>
          <select
            id="isolationPrecautions"
            name="isolationPrecautions"
            className="form-input"
            value={formData.isolationPrecautions}
            onChange={handleInputChange}
          >
            <option value="">انتحاب کنید</option>

            {formData.isolationPrecautionsOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="dietRestrictions" className="form-label">
            محدودیت‌های غذایی
          </label>
          <textarea
            id="dietRestrictions"
            name="dietRestrictions"
            className="form-input"
            value={formData.dietRestrictions}
            onChange={handleInputChange}
            placeholder="رژیم غذایی خاص، محدودیت‌ها، NPO و غیره"
          />
        </div>

        <div className="input-group">
          <label htmlFor="mobilityLimitations" className="form-label">
            محدودیت‌های حرکتی
          </label>
          <textarea
            id="mobilityLimitations"
            name="mobilityLimitations"
            className="form-input"
            value={formData.mobilityLimitations}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="mentalStatusAssessment" className="form-label">
            ارزیابی وضعیت روانی
          </label>
          <textarea
            id="mentalStatusAssessment"
            name="mentalStatusAssessment"
            className="form-input"
            value={formData.mentalStatusAssessment}
            onChange={handleInputChange}
            placeholder="سطح هوشیاری، همکاری، اضطراب، افسردگی"
          />
        </div>

        {/* Administrative Information */}
        <h1>اطلاعات اداری</h1>

        <div className="input-group">
          <label htmlFor="admissionSource" className="form-label">
            منبع پذیرش
          </label>
          <select
            id="admissionSource"
            name="admissionSource"
            className="form-input"
            value={formData.admissionSource}
            onChange={handleInputChange}
            required
          >
            <option value="">انتحاب کنید</option>
            {formData.admissionSourceOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="roomBedAssignment" className="form-label">
            ترجیح اتاق/تخت
          </label>
          <input
            type="text"
            id="roomBedAssignment"
            name="roomBedAssignment"
            className="form-input"
            value={formData.roomBedAssignment}
            onChange={handleInputChange}
            placeholder="شماره اتاق یا تخت مورد نظر"
          />
        </div>

        <div className="input-group">
          <label htmlFor="languagePreference" className="form-label">
            زبان ترجیحی
          </label>
          <select
            id="languagePreference"
            name="languagePreference"
            className="form-input"
            value={formData.languagePreference}
            onChange={handleInputChange}
          >
            <option value="">انتخاب کنید</option>
            {formData.languagePreferenceOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label
            htmlFor="religionCulturalConsiderations"
            className="form-label"
          >
            ملاحظات مذهبی/فرهنگی
          </label>
          <textarea
            id="religionCulturalConsiderations"
            name="religionCulturalConsiderations"
            className="form-input"
            value={formData.religionCulturalConsiderations}
            onChange={handleInputChange}
            placeholder="نیازهای مذهبی، فرهنگی یا رژیم غذایی خاص"
          />
        </div>

        <div className="input-group">
          <label htmlFor="advanceDirectives" className="form-label">
            وضعیت دستورالعمل‌های پیشرفته
          </label>
          <select
            id="advanceDirectives"
            name="advanceDirectives"
            className="form-input"
            value={formData.advanceDirectives}
            onChange={handleInputChange}
          >
            <option value="">انتخاب کنید</option>
            {formData.advanceDirectivesOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="legalGuardian" className="form-label">
            قیم قانونی (در صورت لزوم)
          </label>
          <input
            type="text"
            id="legalGuardian"
            name="legalGuardian"
            className="form-input"
            value={formData.legalGuardian}
            onChange={handleInputChange}
            placeholder="نام و اطلاعات تماس قیم قانونی"
          />
        </div>

        <div className="input-group">
          <label htmlFor="admissionNotes" className="form-label">
            یادداشت‌های پذیرش
          </label>
          <textarea
            id="admissionNotes"
            name="admissionNotes"
            className="form-input"
            value={formData.admissionNotes}
            onChange={handleInputChange}
            placeholder="سایر اطلاعات مهم یا یادداشت‌های اضافی"
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
