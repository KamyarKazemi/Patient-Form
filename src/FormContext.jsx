import { createContext, useState } from "react";

const FormContext = createContext();

function Provider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    idCode: "",
    birthDate: "",
    age: "",
    phoneNumber: "",
    homePhoneNumber: "",
    fullAdderess: "",
  });

  const [idError, setIdError] = useState(false);
  const [isAnyError, setIsAnyError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const handleIdCode = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^0-9]/g, "");

    const isTenDigits = cleanedValue.length === 10;

    // let isUnique = true;
    // for (let i = 0; i < cleanedValue.length; i++) {
    //   // ✅ condition fixed
    //   if (cleanedValue.indexOf(cleanedValue[i]) !== i) {
    //     isUnique = false;
    //     break;
    //   }
    // }

    if (isTenDigits) {
      console.log("✌️ idCode is Valid");
      setIdError(false);
      setIsAnyError(false);
    } else {
      console.log("🤦 idCode is Invalid");
      setIdError(true);
      setIsAnyError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleAge = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 3);
    const numericAge = parseInt(cleanedValue, 10);
    const isAgeValid = numericAge >= 0 && numericAge <= 120;
    if (isAgeValid) {
      console.log("✌️ age  is Valid");
      setIdError(false);
      setIsAnyError(false);
    } else {
      console.log("🤦 age is Invalid");
      setIdError(true);
      setIsAnyError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handlePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 11);
    const cleanedValue2 = value.replace(/\D/g, "").slice(0, 10);
    const isValid = /^09\d{9}$/.test(cleanedValue);
    const isValid2 = /^9\d{9}$/.test(cleanedValue2);
    if (isValid || isValid2) {
      console.log("✌️ phone  is Valid");
      setIdError(false);
      setIsAnyError(false);
    } else {
      console.log("🤦 phone is Invalid");
      setIdError(true);
      setIsAnyError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const handleHomePhoneNumber = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 8);
    const numVars = [
      "021",
      "025",
      "026",
      "031",
      "041",
      "051",
      "071",
      "076",
      "081",
      "083",
      "084",
      "085",
      "086",
    ];

    const prefix = cleanedValue.slice(0, 3);

    const isValid = numVars.includes(prefix) && cleanedValue.length === 8;

    if (isValid) {
      console.log("✌️ home  is Valid");
      setIdError(false);
      setIsAnyError(false);
    } else {
      console.log("🤦 home is Invalid");
      setIdError(true);
      setIsAnyError(true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const [years, setYears] = useState([]);
  const [months] = useState([
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ]);
  const [days, setDays] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
    if (selectedMonth) updateDays(year, selectedMonth);
  };

  const handleMonthChange = (e) => {
    const month = parseInt(e.target.value);
    setSelectedMonth(month);
    if (selectedYear) updateDays(selectedYear, month);
  };

  const handleDayChange = () => {
    // Optional: store the selected day if needed
  };

  const isLeapYearShamsi = (year) => {
    // Simple approximation for leap year in Shamsi calendar
    return ((year + 38) * 682) % 2816 < 682;
  };

  const updateDays = (year, month) => {
    let numDays = 30;
    if (month <= 6) numDays = 31;
    else if (month === 12) numDays = isLeapYearShamsi(year) ? 30 : 29;

    const dayList = Array.from({ length: numDays }, (_, i) => i + 1);
    setDays(dayList);
  };

  const baseIcuReason = [
    {
      symptom: "سایر دلایل عمومی (Miscellaneous)",
      subSymptom: [
        "نارسایی حاد تنفسی (Acute Respiratory Failure)",
        "دیسترس تنفسی حاد (ARDS)",
        "تشدید آسم یا COPD مقاوم به درمان",
        "پنومونی شدید با کاهش اشباع اکسیژن",
        "آمبولی ریه (Pulmonary Embolism)",
        "انسداد راه هوایی (Obstruction of airway)",
        "نیاز به تهویه مکانیکی (Mechanical ventilation)",
      ],
    },

    {
      symptom: "دلایل قلبی‌عروقی (Cardiovascular Causes)",
      subSymptom: [
        "شوک قلبی (Cardiogenic Shock)",
        "سکته قلبی حاد وسیع (Massive Myocardial Infarction)",
        "آریتمی‌های تهدیدکننده حیات (VT/VF, Complete Heart Block)",
        "ایست قلبی (Cardiac Arrest, post-resuscitation care)",
        "نارسایی احتقانی قلب (Acute Decompensated Heart Failure)",
        "پریکاردیت یا تامپوناد قلبی",
        "فشار خون بسیار بالا یا بسیار پایین کنترل‌نشده",
      ],
    },

    {
      symptom: "دلایل نورولوژیک (Neurological Causes)",
      subSymptom: [
        "سکته مغزی (Stroke - Ischemic or Hemorrhagic)",
        "صرع مقاوم یا status epilepticus",
        "ترومای مغزی (Severe Traumatic Brain Injury)",
        "افزایش فشار داخل جمجمه (Increased ICP)",
        "کومای غیرقابل توضیح یا GCS پایین",
        "بیماری‌های نوروموسکولار پیشرفته (مثل گیلن باره)",
      ],
    },

    {
      symptom: "دلایل کلیوی (Renal Causes)",
      subSymptom: [
        "نارسایی حاد کلیوی نیازمند دیالیز اورژانسی",
        "اختلالات شدید الکترولیتی (مثل هایپرکالمی شدید)",
        "اسیدوز متابولیک شدید",
      ],
    },

    {
      symptom: "دلایل گوارشی (Gastrointestinal Causes)",
      subSymptom: [
        "خونریزی گوارشی شدید (GI bleeding with hemodynamic instability)",
        "پانکراتیت حاد شدید (Severe acute pancreatitis)",
        "پریتونیت عمومی یا سپسیس شکمی",
        "انسداد روده با خطر نکروز",
      ],
    },

    {
      symptom: "دلایل عفونی و سپتیک (Infectious/Sepsis)",
      subSymptom: [
        "سپسیس شدید و شوک سپتیک",
        "تب بالا با ناپایداری همودینامیک",
        "اندوکاردیت عفونی با عوارض",
        "پنومونی مقاوم همراه با سپسیس",
      ],
    },

    {
      symptom: "دلایل جراحی و تروما (Surgical/Trauma Causes)",
      subSymptom: [
        "ترومای چندگانه (Polytrauma)",
        "شکستگی لگن یا جمجمه با ناپایداری همودینامیک یا تنفسی",
        "خونریزی داخلی یا خارجی شدید",
        "بعد از جراحی‌های بزرگ مثل جراحی قلب، مغز یا شکم",
      ],
    },

    {
      symptom: "مسمومیت‌ها و اختلالات متابولیک",
      subSymptom: [
        "مسمومیت دارویی یا شیمیایی تهدیدکننده حیات",
        "اسیدوز لاکتیک یا کتواسیدوز دیابتی شدید",
        "هیپوگلیسمی یا هایپرگلیسمی شدید",
        "اختلالات سدیم/پتاسیم شدید",
      ],
    },

    {
      symptom: "سایر دلایل عمومی (Miscellaneous)",
      subSymptom: [
        "سوختگی‌های وسیع (Burns >30% TBSA)",
        "هایپوترمی یا هایپرترمی شدید",
        "بیماران نیازمند مانیتورینگ مداوم به دلایل پیش‌آگهی ضعیف",
      ],
    },
  ];

  const [selectedSymptom, setSelectedSymptom] = useState("");

  const handleSymptom = (e) => {
    setSelectedSymptom(e.target.value);
  };

  const selectedItem = baseIcuReason.find(
    (item) => item.symptom === selectedSymptom
  );

  const earlyDiagnosisVitalSign = [
    {
      vitalSign: "فشار خون (SBP)",
      warningCriteria: "< 90 mmHg یا افت ناگهانی ≥ 40 mmHg",
    },

    {
      vitalSign: "تعداد تنفس",
      warningCriteria: "> 30 یا < 8 در دقیقه",
    },

    {
      vitalSign: "اشباع اکسیژن (SpO₂)",
      warningCriteria: "< 90% علی‌رغم اکسیژن مکمل",
    },

    {
      vitalSign: "ضربان قلب",
      warningCriteria: "< 40 یا > 130 bpm",
    },

    {
      vitalSign: "دمای بدن",
      warningCriteria: "< 35°C یا > 40°C",
    },

    {
      vitalSign: "GCS (سطح هوشیاری)",
      warningCriteria: "≤ 8 یا کاهش سریع طی زمان کوتاه",
    },
  ];

  const [vitalDiagnosis, setVitalDiagnosis] = useState("");

  const handleVitalDiagnosis = (e) => {
    setVitalDiagnosis(e.target.value);
  };

  const selectedVitalDiagnosis = earlyDiagnosisVitalSign.find(
    (item) => item.vitalSign === selectedVitalDiagnosis
  );

  const earlyDiagnosisList = [
    {
      vitalSign: "معیارهای تنفسی (Respiratory Red Flags",
      vitalSignExplaination: [
        "دیسترس تنفسی شدید (retractions, accessory muscles use)",
        "نیاز فوری به تهویه مکانیکی",
        "برونشواسپاسم شدید مقاوم",
        "پنوموتوراکس تحت فشار",
        "صدای تنفس کاهش‌یافته یا غیاب صدا در یک ریه",
        "بالا بودن PaCO₂ و اسیدوز در ABG",
      ],
    },

    {
      vitalSign: "معیارهای قلبی‌عروقی",
      vitalSignExplaination: [
        "شوک (سردی اندام، تاخیر پرشدن مویرگی، فشار پایین)",
        "آریتمی تهدیدکننده زندگی (VF, VT, complete heart block)",
        "درد قفسه سینه شدید با علائم ناپایداری",
        "تنگی نفس با ادم حاد ریه",
        "فشار خون مقاوم به درمان یا فشار پایین پایدار",
      ],
    },

    {
      vitalSign: "اختلالات هوشیاری و عصبی",
      vitalSignExplaination: [
        "GCS ≤ 8",
        "تشنج ممتد یا برگشت‌پذیر نشده",
        "تغییر ناگهانی در رفتار/وضعیت روانی",
        "سکته مغزی مشکوک با ناپایداری",
        "افت هوشیاری بدون دلیل واضح",
        "سندرم Guillain-Barré با خطر درگیری تنفس",
      ],
    },

    {
      vitalSign: "شواهد سپسیس یا عفونت شدید",
      vitalSignExplaination: [
        "تب شدید با لرز و ناپایداری فشار",
        "وجود منبع عفونی + اختلال در عملکرد ≥1 ارگان",
        "لکوسیتوز شدید یا لکوپنی + علائم شوک",
        "لکوسیتوز شدید یا لکوپنی + علائم شوک",
        "نیاز به نرمال‌سالین > 2 لیتر بدون پاسخ همودینامیک",
      ],
    },

    {
      vitalSign: "معیارهای کلیوی / متابولیک",
      vitalSignExplaination: [
        "کراتینین ↑ سریع + کاهش ادرار (Oliguria/Anuria)",
        "پتاسیم > 6.5 mEq/L همراه با ECG abnormal",
        "اسیدوز شدید (pH < 7.2)",
        "نارسایی چند ارگانی (MODS)",
        "نیاز فوری به دیالیز اورژانسی",
      ],
    },

    {
      vitalSign: "تروما و خونریزی شدید",
      vitalSignExplaination: [
        "تروما با GCS پایین یا همودینامیک ناپایدار",
        "خونریزی داخلی/خارجی شدید (Hb↓ + شوک)",
        "هموپتیزی یا ملنا شدید با فشار پایین",
        "بعد از CPR موفق (Post-ROSC care)",
      ],
    },

    {
      vitalSign: "سایر شرایط ضروری",
      vitalSignExplaination: [
        "مسمومیت با دارو یا سم با تهدید تنفس/قلب",
        "سوختگی وسیع (>30%) یا همراه با استنشاق دود",
        "هیپوترمی یا هیپرترمی شدید مقاوم",
        "بعد از جراحی پرخطر همراه با بی‌ثباتی",
      ],
    },
  ];

  const [earlyDiagnosis, setEarlyDiagnosis] = useState("");

  const handleEarlyDiagnosis = (e) => {
    setEarlyDiagnosis(e.target.value);
  };

  const selectedEarlyDiagnosis = earlyDiagnosis.find(
    (item) => item.vitalSign === selectedEarlyDiagnosis
  );

  const sharedValues = {
    formData,
    handleInputChange,
    handleIdCode,
    handleAge,
    handlePhoneNumber,
    handleHomePhoneNumber,
    years,
    handleMonthChange,
    months,
    setYears,
    handleYearChange,
    selectedMonth,
    handleDayChange,
    days,
    baseIcuReason,
    selectedSymptom,
    handleSymptom,
    selectedItem,
    earlyDiagnosisVitalSign,
    vitalDiagnosis,
    handleVitalDiagnosis,
    selectedVitalDiagnosis,
    earlyDiagnosisList,
    earlyDiagnosis,
    handleEarlyDiagnosis,
    idError,
    isAnyError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
