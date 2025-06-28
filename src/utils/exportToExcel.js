// utils/exportPatientsForToday.js
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const addPatientToStorage = (patient) => {
  const today = new Date().toISOString().slice(0, 10);
  const existing = JSON.parse(localStorage.getItem("patients")) || {};
  const updated = existing[today] ? [...existing[today], patient] : [patient];
  localStorage.setItem(
    "patients",
    JSON.stringify({ ...existing, [today]: updated })
  );
};

export const exportPatientsForToday = () => {
  const today = new Date().toISOString().slice(0, 10);
  const all = JSON.parse(localStorage.getItem("patients")) || {};
  const patients = all[today] || [];

  if (!patients.length) return alert("هیچ اطلاعاتی برای امروز ثبت نشده است.");

  const localized = {
    firstName: "نام",
    lastName: "نام خانوادگی",
    idCode: "کد ملی",
    medicalRecordNumber: "شماره پرونده",
    age: "سن",
    phoneNumber: "شماره تماس",
    birthDate: "تاریخ تولد",
    fullAddress: "آدرس",
    insuranceCompany: "شرکت بیمه",
    insurancePolicyNumber: "شماره بیمه‌نامه",
    emergencyContactName: "نام تماس اضطراری",
    emergencyContactPhone: "شماره تماس اضطراری",
    secondEmergencyContactPhone: "شماره تماس اضطراری دوم",
    emergencyContactAddress: "آدرس تماس اضطراری",
    admissionWeight: "وزن",
    admissionHeight: "قد",
    vitalSignsOnAdmission: "علائم حیاتی",
    glasgowComaScale: "GCS",
    apacheScore: "APACHE II",
    selectedIcuReason: "علت ICU",
    selectedIcuReasonSubcategories: "علائم ICU",
    selectedPrimaryDiagnosis: "تشخیص اولیه",
    selectedPrimaryDiagnosisSubcategories: "تشخیص‌های فرعی",
    selectedComorbidity: "بیماری زمینه‌ای",
    selectedComorbiditySubcategories: "جزئیات بیماری زمینه‌ای",
    selectedSurgicalHistory: "سابقه جراحی",
    selectedSurgicalHistorySubcategories: "جزئیات جراحی",
    selectedMedication: "داروهای مصرفی",
    selectedMedicationSubcategories: "جزئیات داروها",
    selectedDrugAllergy: "آلرژی دارویی",
    selectedDrugAllergySubcategories: "جزئیات آلرژی",
    selectedIcuAdmissionReason: "دلایل بستری ICU",
    selectedIcuAdmissionReasonSubcategories: "جزئیات بستری ICU",
  };

  const formatted = patients.map((p) => {
    const row = {};
    Object.entries(localized).forEach(([key, label]) => {
      const val = p[key];
      row[label] = Array.isArray(val)
        ? val.length
          ? val.join("، ")
          : "ندارد"
        : val || "ندارد";
    });
    return row;
  });

  const sheet = XLSX.utils.json_to_sheet(formatted);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet, "بیماران");

  const buffer = XLSX.write(wb, { type: "array", bookType: "xlsx" });
  const blob = new Blob([buffer], { type: "application/octet-stream" });

  saveAs(blob, `اطلاعات_بیمار_${today}.xlsx`);
};
