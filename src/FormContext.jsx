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

  const vitalSigns = [
    {
      sign: "فشار خون (SBP)",
    },

    {
      sign: "تعداد تنفس	",
    },

    {
      sign: "اشباع اکسیژن (SpO₂)",
    },

    {
      sign: "ضربان قلب",
    },

    {
      sign: "دمای بدن",
    },

    {
      sign: "GCS (سطح هوشیاری)",
    },
  ];

  const firstDiagnosis = [
    {
      diagnosis: "معیارهای تنفسی (Respiratory Red Flags)",
      subDiagnosis: [
        "دیسترس تنفسی شدید (retractions, accessory muscles use)",
        "نیاز فوری به تهویه مکانیکی",
        "برونشواسپاسم شدید مقاوم",
        "پنوموتوراکس تحت فشار",
        "صدای تنفس کاهش‌یافته یا غیاب صدا در یک ریه",
        "بالا بودن PaCO₂ و اسیدوز در ABG",
      ],
    },

    {
      diagnosis: "معیارهای قلبی‌عروقی",
      subDiagnosis: [
        "شوک (سردی اندام، تاخیر پرشدن مویرگی، فشار پایین)",
        "آریتمی تهدیدکننده زندگی (VF, VT, complete heart block)",
        "درد قفسه سینه شدید با علائم ناپایداری",
        "تنگی نفس با ادم حاد ریه",
        "فشار خون مقاوم به درمان یا فشار پایین پایدار",
      ],
    },

    {
      diagnosis: "اختلالات هوشیاری و عصبی",
      subDiagnosis: [
        "GCS ≤ 8",
        "تشنج ممتد یا برگشت‌پذیر نشده",
        "تغییر ناگهانی در رفتار/وضعیت روانی",
        "سکته مغزی مشکوک با ناپایداری",
        "افت هوشیاری بدون دلیل واضح",
        "سندرم Guillain-Barré با خطر درگیری تنفس",
      ],
    },

    {
      diagnosis: "شواهد سپسیس یا عفونت شدید",
      subDiagnosis: [
        "تب شدید با لرز و ناپایداری فشار",
        "وجود منبع عفونی + اختلال در عملکرد ≥1 ارگان",
        "لکوسیتوز شدید یا لکوپنی + علائم شوک",
        "لاکتات سرم بالا > 2 mmol/L",
        "نیاز به نرمال‌سالین > 2 لیتر بدون پاسخ همودینامیک",
      ],
    },

    {
      diagnosis: "معیارهای کلیوی / متابولیک",
      subDiagnosis: [
        "کراتینین ↑ سریع + کاهش ادرار (Oliguria/Anuria)",
        "پتاسیم > 6.5 mEq/L همراه با ECG abnormal",
        "اسیدوز شدید (pH < 7.2)",
        "نارسایی چند ارگانی (MODS)",
        "نیاز فوری به دیالیز اورژانسی",
      ],
    },

    {
      diagnosis: "تروما و خونریزی شدید",
      subDiagnosis: [
        "تروما با GCS پایین یا همودینامیک ناپایدار",
        "خونریزی داخلی/خارجی شدید (Hb↓ + شوک)",
        "هموپتیزی یا ملنا شدید با فشار پایین",
        "بعد از CPR موفق (Post-ROSC care)",
      ],
    },

    {
      diagnosis: "سایر شرایط ضروری",
      subDiagnosis: [
        "مسمومیت با دارو یا سم با تهدید تنفس/قلب",
        "سوختگی وسیع (>30%) یا همراه با استنشاق دود",
        "هیپوترمی یا هیپرترمی شدید مقاوم",
        "بعد از جراحی پرخطر همراه با بی‌ثباتی",
      ],
    },
  ];

  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");

  const handleDiagnosis = (e) => {
    setSelectedDiagnosis(e.target.value);
  };

  const selectedSubDiagnosis = firstDiagnosis.find(
    (item) => item.diagnosis === selectedDiagnosis
  );

  const comorbidities = [
    {
      comorbiditie: "بیماری‌های قلبی و عروقی",
      subComorbiditie: [
        "فشار خون بالا (Hypertension)",
        "نارسایی قلبی (Heart Failure)",
        "بیماری عروق کرونر (Coronary Artery Disease)",
        "آریتمی قلبی (Arrhythmia)",
        "سکته قلبی (Myocardial Infarction)",
        "بیماری دریچه‌ای قلب (Valvular Heart Disease)",
        "کاردیومیوپاتی (Cardiomyopathy)",
        "فشار خون ریوی (Pulmonary Hypertension)",
      ],
    },

    {
      comorbiditie: "بیماری‌های تنفسی",
      subComorbiditie: [
        "آسم (Asthma)",
        "بیماری انسدادی مزمن ریه (COPD)",
        "فیبروز ریوی (Pulmonary Fibrosis)",
        "آمفیزم (Emphysema)",
        "آپنه خواب (Sleep Apnea)",
        "برونشکتازی (Bronchiectasis)",
      ],
    },

    {
      comorbiditie: "بیماری‌های متابولیک و غدد درون‌ریز",
      subComorbiditie: [
        "دیابت نوع ۱ و ۲ (Type 1 and 2 Diabetes Mellitus)",
        "کم‌کاری یا پرکاری تیروئید (Hypo/Hyperthyroidism)",
        "چاقی مفرط (Morbid Obesity)",
        "سندرم متابولیک (Metabolic Syndrome)",
        "بیماری کوشینگ (Cushing’s Syndrome)",
        "بیماری آدیسون (Addison’s Disease)",
      ],
    },

    {
      comorbiditie: "بیماری‌های کلیوی",
      subComorbiditie: [
        "نارسایی مزمن کلیه (CKD)",
        "سنگ کلیه مکرر (Recurrent Kidney Stones)",
        "نفروپاتی دیابتی (Diabetic Nephropathy)",
        "سندرم نفروتیک (Nephrotic Syndrome)",
        "دیالیز (Hemodialysis / Peritoneal Dialysis)",
      ],
    },

    {
      comorbiditie: "بیماری‌های گوارشی و کبدی",
      subComorbiditie: [
        "هپاتیت مزمن B و C (Chronic Hepatitis B/C)",
        "سیروز کبدی (Liver Cirrhosis)",
        "بیماری کبد چرب غیرالکلی (NAFLD)",
        "بیماری کرون (Crohn’s Disease)",
        "کولیت اولسراتیو (Ulcerative Colitis)",
        "زخم معده یا اثنی‌عشر (Peptic Ulcer Disease)",
      ],
    },

    {
      comorbiditie: "بیماری‌های عصبی و روانی",
      subComorbiditie: [
        "صرع (Epilepsy)",
        "سکته مغزی (Stroke)",
        "پارکینسون (Parkinson’s Disease)",
        "آلزایمر و دمانس (Dementia / Alzheimer’s)",
        "اختلال دو قطبی (Bipolar Disorder)",
        "افسردگی مزمن (Chronic Depression)",
        "اسکلروز متعدد (MS)",
      ],
    },

    {
      comorbiditie: "بیماری‌های ایمنی و خودایمنی",
      subComorbiditie: [
        "لوپوس (SLE)",
        "آرتریت روماتوئید (Rheumatoid Arthritis)",
        "اسکلرودرما",
        "سندرم شوگرن (Sjögren’s Syndrome)",
        "پسوریازیس شدید (Severe Psoriasis)",
        "بیماری سلیاک",
      ],
    },

    {
      comorbiditie: "بیماری‌های خونی و انکولوژیک",
      subComorbiditie: [
        "کم‌خونی داسی‌شکل (Sickle Cell Anemia)",
        "تالاسمی ماژور (Thalassemia Major)",
        "هموفیلی (Hemophilia)",
        "سرطان‌های فعال یا درمان‌شده (Active or Treated Cancers)",
        "لوسمی، لنفوم، میلوما",
        "اختلالات انعقادی (Coagulopathy)",
      ],
    },

    {
      comorbiditie: "بیماری‌های عفونی مزمن",
      subComorbiditie: [
        "HIV/AIDS",
        "سل فعال یا نهفته (TB)",
        "بیماری لایم (Lyme Disease)",
        "سیفلیس مزمن",
      ],
    },

    {
      comorbiditie: "بیماری‌های پوستی شدید",
      subComorbiditie: [
        "اگزمای شدید (Severe Eczema)",
        "پسوریازیس گسترده",
        "پمفیگوس",
      ],
    },

    {
      comorbiditie: "سایر بیماری‌ها و شرایط خاص",
      subComorbiditie: [
        "پیوند عضو (Organ Transplant)",
        "نقص سیستم ایمنی (Immunodeficiency)",
        "حاملگی پرخطر (High-Risk Pregnancy)",
        "بیماری‌های نادر ژنتیکی",
        "اعتیاد مزمن (Chronic Substance Abuse)",
        "ناباروری همراه با بیماری زمینه‌ای",
      ],
    },
  ];

  const [selectedComorbiditie, setSelectedComorbiditie] = useState("");

  const handleComorbiditie = (e) => {
    setSelectedComorbiditie(e.target.value);
  };

  const selectedSubComorbiditie = comorbidities.find(
    (item) => item.comorbiditie === selectedComorbiditie
  );

  const surgicalHistories = [
    {
      history: "جراحی‌های قلب و عروق",
      subHistory: [
        "جراحی بای‌پس عروق کرونر (CABG)",
        "آنژیوپلاستی یا استنت‌گذاری (Angioplasty / Stent)",
        "تعویض یا ترمیم دریچه قلب (Valve Replacement / Repair)",
        "کاردیومیوپاتی با دستگاه LVAD",
        "تعبیه پیس‌میکر یا دفیبریلاتور (Pacemaker / ICD)",
        "جراحی آئورت (Aortic Repair or Dissection Surgery)",
      ],
    },

    {
      history: "جراحی‌های مغز و اعصاب",
      subHistory: [
        "کرانیوتومی (Craniotomy)",
        "جراحی تومور مغزی (Brain Tumor Resection)",
        "جراحی ستون فقرات (Spinal Fusion / Discectomy / Laminectomy)",
        "درمان هیدروسفالی (Shunt Placement)",
        "درمان هیدروسفالی (Shunt Placement)",
      ],
    },

    {
      history: "جراحی‌های گوارشی",
      subHistory: [
        "آپاندکتومی (Appendectomy)",
        "کله‌سیستکتومی (Cholecystectomy – برداشتن کیسه صفرا)",
        "جراحی فتق (Hernia Repair – اینگوینال، نافی، فمورال)",
        "هموروئیدکتومی (Hemorrhoidectomy)",
        "کلکتومی (Colectomy – برداشتن بخشی از روده بزرگ)",
        "گاسترکتومی (Gastrectomy – برداشتن بخشی یا کل معده)",
        "جراحی رفلاکس (Fundoplication)",
        "پانکراتکتومی (Pancreatectomy)",
        "جراحی بای‌پس معده یا اسلیو معده (Gastric Bypass / Sleeve)",
      ],
    },

    {
      history: "جراحی‌های کبد، طحال و لوزالمعده",
      subHistory: [
        "برداشتن کیست کبدی",
        "اسپلنکتومی (Splenectomy – برداشتن طحال)",
        "رزکسیون پانکراس (Pancreatic Resection)",
        "بیوپسی کبدی (Liver Biopsy)",
      ],
    },

    {
      history: "جراحی‌های کلیه و مجاری ادراری",
      subHistory: [
        "نفرکتومی (Nephrectomy – برداشتن کلیه)",
        "سنگ‌شکنی یا برداشتن سنگ کلیه (PCNL / URS / Lithotripsy)",
        "تعبیه دابل جی یا کاتتر کلیوی",
        "پیوند کلیه (Kidney Transplant)",
        "سیستکتومی (برداشتن مثانه)",
        "پروستاتکتومی (برداشتن پروستات)",
      ],
    },

    {
      history: "جراحی‌های زنان و زایمان",
      subHistory: [
        "سزارین (C-Section)",
        "هیسترکتومی (برداشتن رحم)",
        "اوفورکتومی (برداشتن تخمدان)",
        "لاپاراسکوپی تشخیصی یا درمانی",
        "کورتاژ رحم (D&C)",
        "جراحی اندومتریوز",
        "جراحی بارداری خارج‌رحمی",
      ],
    },

    {
      history: "جراحی‌های ارتوپدی",
      subHistory: [
        "تعویض مفصل (هیپ، زانو، شانه) – Total Joint Replacement",
        "فیکساسیون شکستگی (ORIF – Open Reduction Internal Fixation)",
        "آرتروسکوپی زانو / شانه",
        "جراحی رباط ACL / منیسک",
        "آمنیوتومی ستون فقرات",
      ],
    },

    {
      history: "جراحی‌های گوش، حلق و بینی (ENT)",
      subHistory: [
        "تونسیلکتومی (برداشتن لوزه)",
        "آدنوئیدکتومی (برداشتن لوزه سوم)",
        "جراحی سینوس (Sinus Surgery)",
        "سپتوپلاستی یا انحراف بینی",
        "جراحی گوش میانی / کاشت حلزون",
      ],
    },

    {
      history: " جراحی‌های چشم",
      subHistory: [
        "عمل آب مروارید (Cataract Surgery)",
        "عمل لازک یا لیزیک",
        "جراحی گلوکوم",
        "شبکیه‌برداری یا ترمیم پارگی شبکیه",
      ],
    },

    {
      history: "جراحی‌های پوست و زیبایی",
      subHistory: [
        "جراحی پلاستیک و ترمیمی (Reconstructive Surgery)",
        "برداشت تومور یا کیست پوست",
        "پیوند پوست (Skin Graft)",
        "جراحی زیبایی بینی (Rhinoplasty)",
        "لیپوساکشن / ابدومینوپلاستی (Liposuction / Tummy Tuck)",
        "ماموپلاستی (افزایش/کاهش سینه)",
      ],
    },

    {
      history: "جراحی‌های انکولوژیک (سرطان‌ها)",
      subHistory: [
        "رزکسیون تومور (هر ناحیه)",
        "ماستکتومی (برداشتن پستان)",
        "جراحی کولورکتال برای سرطان روده",
        "جراحی پروستات برای سرطان",
        "برداشت غدد لنفاوی (Lymphadenectomy)",
      ],
    },

    {
      history: "سایر جراحی‌های رایج",
      subHistory: [
        "پیوند عضو (کلیه، کبد، قلب)",
        "تعبیه پورت مرکزی (Port / Central Line Placement)",
        "آمپوتاسیون عضو (Amputation)",
        "ترمیم زخم‌های وسیع (Debridement)",
        "جراحی آندوسکوپیک دستگاه گوارش",
      ],
    },
  ];

  const [selectedSurgicalHistory, setSelectedSurgicalHistory] = useState("");

  const handleHistory = (e) => {
    setSelectedSurgicalHistory(e.target.value);
  };

  const selectedSubSurgicalHistory = surgicalHistories.find(
    (item) => item.history === selectedSurgicalHistory
  );

  const icuAdmissionReasons = [
    {
      reason: "مشکلات قلبی و عروقی",
      subReason: [
        "سکته قلبی (Acute Myocardial Infarction – MI)",
        "نارسایی شدید قلبی (Acute Heart Failure)",
        "آریتمی‌های خطرناک (Life-threatening Arrhythmias)",
        "شوک قلبی (Cardiogenic Shock)",
        "تامپوناد قلبی (Cardiac Tamponade)",
        "فشار خون بسیار بالا یا پایین (Hypertensive Crisis / Hypotension)",
      ],
    },

    {
      reason: "اختلالات تنفسی",
      subReason: [
        "نارسایی حاد تنفسی (Acute Respiratory Failure)",
        "پنومونی شدید (Severe Pneumonia)",
        "ARDS (سندرم دیسترس حاد تنفسی)",
        "COPD شدید یا حمله آسم شدید",
        "آمبولی ریه (Pulmonary Embolism)",
        "نیاز به تهویه مکانیکی (Mechanical Ventilation)",
      ],
    },

    {
      reason: "بیماری‌های مغز و اعصاب",
      subReason: [
        "سکته مغزی (Stroke – ایسکمیک یا هموراژیک)",
        "تشنج‌های مکرر یا استاتوس اپی‌لپتیکوس",
        "افزایش فشار داخل جمجمه (ICP)",
        "تروما یا ضربه به سر (Head Injury)",
        "خونریزی ساب‌آراکنوئید",
        "گیلن باره یا نوروپاتی‌های پیش‌رونده",
      ],
    },

    {
      reason: "شوک‌ها و وضعیت‌های اورژانسی",
      subReason: [
        "شوک سپتیک (Septic Shock)",
        "شوک آنافیلاکسی (Anaphylactic Shock)",
        "شوک هیپوولمیک (Hypovolemic Shock)",
        "مولتی ارگان فیلر (MODS – Multi Organ Dysfunction Syndrome)",
      ],
    },

    {
      reason: "اختلالات متابولیک و کلیوی",
      subReason: [
        "اسیدوز یا آلکالوز شدید",
        "دیابت کنترل‌نشده (Ketoacidosis / HHS)",
        "نارسایی حاد کلیه (Acute Kidney Injury)",
        "الکترولیت‌درهم‌ریختگی شدید (Hyperkalemia / Hyponatremia)",
        "نیاز به دیالیز اورژانسی",
      ],
    },

    {
      reason: "مسمومیت‌ها و اختلالات دارویی",
      subReason: [
        "مصرف بیش از حد دارو (Overdose)",
        "مسمومیت با مواد شیمیایی یا گازهای سمی",
        "اعتیاد شدید همراه با علائم ترک",
        "مصرف ترکیبی داروهای آرام‌بخش / مخدر / الکل",
      ],
    },

    {
      reason: "عفونت‌ها و بیماری‌های سیستمیک",
      subReason: [
        "سپسیس (Sepsis)",
        "مننژیت باکتریایی یا ویروسی",
        "اندوکاردیت عفونی",
        "عفونت‌های سیستمیک با ارگانیسم‌های مقاوم",
        "کوید-۱۹ با درگیری ریوی و هایپوکسی شدید",
      ],
    },

    {
      reason: "بعد از اعمال جراحی سنگین",
      subReason: [
        "جراحی قلب باز",
        "جراحی مغز و اعصاب",
        "پیوند عضو (کبد، قلب، کلیه)",
        "جراحی‌های بزرگ شکمی (Colectomy, Whipple, etc.)",
        "جراحی با خونریزی شدید یا عدم تعادل همودینامیک",
      ],
    },

    {
      reason: "تروما و صدمات شدید",
      subReason: [
        "تصادفات شدید رانندگی",
        "سقوط از ارتفاع",
        "سوختگی وسیع (Burn > 20% TBSA)",
        "تروماهای نافذ (گلوله، چاقو)",
        "شکستگی‌های باز و پیچیده همراه با شوک",
      ],
    },

    {
      reason: "وضعیت‌های زنان و زایمان در ICU",
      subReason: [
        "پره‌اکلامپسی / اکلامپسی شدید",
        "خونریزی پس از زایمان (PPH)",
        "شوک ناشی از بارداری خارج‌رحمی",
        "سپسیس بعد از زایمان",
        "عوارض ناشی از جراحی سزارین",
      ],
    },

    {
      reason: "وضعیت‌های خاص و نادر",
      subReason: [
        "هیپرترمی بدخیم (Malignant H,yperthermia)",
        "سندرم آنتی‌فسفولیپید شدید",
        "بحران میاستنی (Myasthenic Crisis)",
        "سندرم گیلن‌باره پیشرونده",
        "نارسایی کبدی حاد (Acute Liver Failure)",
      ],
    },
  ];

  const [selectedAdmissionReasons, setSelectedAdmissionReasons] = useState("");

  const handleAdmissionReasons = (e) => {
    setSelectedAdmissionReasons(e.target.value);
  };

  const selectedSubAdmissionReasons = icuAdmissionReasons.find(
    (item) => item.reason === selectedAdmissionReasons
  );

  const usedDrugs = [
    {
      drug: "داروهای قلبی و عروقی",
      subDrug: [
        "Aspirin (آسپرین)",
        "Clopidogrel (Plavix) – ضد پلاکت",
        "Warfarin – ضد انعقاد",
        "Heparin / Enoxaparin (Clexane) – ضد انعقاد",
        "Nitroglycerin – نیتروگلیسیرین برای آنژین",
        "Beta blockers: Metoprolol, Atenolol",
        "ACE Inhibitors: Captopril, Enalapril, Lisinopril",
        "ARBs: Losartan, Valsartan",
        "Calcium Channel Blockers: Amlodipine, Diltiazem",
        "Diuretics: Furosemide (Lasix), Spironolactone",
        "Digoxin – برای نارسایی قلبی و آریتمی",
      ],
    },

    {
      drug: "داروهای تنفسی",
      subDrug: [
        "Salbutamol (Ventolin) – اسپری یا نبولایزر",
        "Ipratropium (Atrovent",
        "Theophylline",
        "Corticosteroids: Prednisolone, Dexamethasone",
        "Montelukast – ضد آسم",
        "Oxygen Therapy (تجویزی)",
        "Antibiotics for Pneumonia: Azithromycin, Ceftriaxone, Piperacillin-Tazobactam",
      ],
    },

    {
      drug: "داروهای اعصاب و روان",
      subDrug: [
        "Phenytoin, Levetiracetam (Keppra) – ضد تشنج",
        "Diazepam / Lorazepam / Midazolam – آرام‌بخش/ضد اضطراب",
        "Haloperidol – آنتی‌سایکوتیک",
        "Risperidone, Olanzapine",
        "Sertraline, Fluoxetine (SSRIs)",
        "Lithium – در بیماران با اختلال دوقطبی",
        "Morphine / Methadone / Buprenorphine – مسکن و جایگزین اپیوئید",
      ],
    },

    {
      drug: "داروهای دیابت و متابولیک",
      subDrug: [
        "Insulin (Humulin, Lantus, Novorapid)",
        "Metformin",
        "Gliclazide / Glibenclamide",
        "SGLT2 inhibitors: Empagliflozin, Dapagliflozin",
        "Corticosteroids – در موارد نارسایی آدرنال یا التهاب شدید",
      ],
    },

    {
      drug: "آنتی‌بیوتیک‌ها و داروهای ضد عفونت",
      subDrug: [
        "Ceftriaxone / Cefepime / Ceftazidime",
        "Meropenem / Imipenem",
        "Vancomycin",
        "Linezolid",
        "Azithromycin / Clarithromycin",
        "Metronidazole",
        "Fluconazole, Amphotericin B – ضد قارچ",
        "Oseltamivir (Tamiflu) – آنفلوآنزا",
        "Remdesivir, Favipiravir – کووید-۱۹",
      ],
    },

    {
      drug: "داروهای معده و گوارش",
      subDrug: [
        "Pantoprazole / Omeprazole (PPI)",
        "Ranitidine / Famotidine",
        "Lactulose – برای آنسفالوپاتی کبدی",
        "Domperidone / Metoclopramide – ضد تهوع",
        "Loperamide – ضد اسهال",
        "Mesalazine – بیماری‌های التهابی روده",
      ],
    },

    {
      drug: "داروهای ضد انعقاد و ترومبولیتیک",
      subDrug: [
        "Warfarin, Heparin, Enoxaparin",
        "Apixaban, Rivaroxaban, Dabigatran – ضد انعقاد خوراکی جدید",
        "Alteplase (tPA) – ترومبولیتیک برای سکته",
      ],
    },

    {
      drug: "داروهای کلیوی و الکترولیتی",
      subDrug: [
        "Sodium bicarbonate",
        "Potassium Chloride (خوراکی یا تزریقی)",
        "Calcium Gluconate",
        "Sodium Polystyrene Sulfonate (Kayexalate) – برای هایپرکالمی",
        "Sevelamer, Calcitriol – بیماران دیالیزی",
        "Erythropoietin (EPO) – در نارسایی مزمن کلیه",
      ],
    },

    {
      drug: "داروهای سرکوب ایمنی و سرطان",
      subDrug: [
        "Prednisolone / Methylprednisolone",
        "Azathioprine",
        "Mycophenolate Mofetil (CellCept)",
        "Tacrolimus / Cyclosporine",
        "Methotrexate, Cyclophosphamide",
        "Chemotherapy agents – Cisplatin, Doxorubicin, etc.",
      ],
    },

    {
      drug: "داروهای دیگر مهم و خاص",
      subDrug: [
        "Naloxone – آنتاگونیست اپیوئید",
        "Flumazenil – آنتاگونیست بنزودیازپین",
        "IVIG (ایمونوگلوبولین تزریقی) – در بیماری‌های خودایمنی",
        "Antihistamines – مانند Diphenhydramine, Loratadine",
        "Adrenaline / Epinephrine – آنافیلاکسی یا CPR",
        "Hydrocortisone – شوک آدرنال",
      ],
    },
  ];

  const [selectedDrugs, setSelectedDrugs] = useState("");

  const handleDrugs = (e) => {
    setSelectedDrugs(e.target.value);
  };

  const selectedSubDrugs = usedDrugs.find(
    (item) => item.drug === selectedDrugs
  );

  const drugAllergies = [
    {
      allergy: "آنتی‌بیوتیک‌ها",
      subAllergy: [
        "Penicillin / Ampicillin / Amoxicillin",
        "Cephalosporins: Cefalexin, Ceftriaxone, Cefepime",
        "Carbapenems: Meropenem, Imipenem",
        "Sulfonamides: Cotrimoxazole (Trimethoprim + Sulfamethoxazole)",
        "Macrolides: Erythromycin, Azithromycin",
        "Fluoroquinolones: Ciprofloxacin, Levofloxacin",
        "Vancomycin",
        "Clindamycin",
        "Tetracyclines: Doxycycline",
      ],
    },

    {
      allergy: "مسکن‌ها و ضدالتهاب‌ها",
      subAllergy: [
        "NSAIDs: Ibuprofen, Diclofenac, Naproxen",
        "Aspirin",
        "Paracetamol (نادر، اما ممکن)",
        "Opioids: Morphine, Codeine, Tramadol, Fentanyl",
        "Ketorolac",
      ],
    },

    {
      allergy: "بی‌حس‌کننده‌ها و بیهوشی",
      subAllergy: [
        "Lidocaine (موضعی)",
        "Bupivacaine",
        "Propofol",
        "Etomidate",
        "Midazolam / Diazepam (بیشتر حساسیت‌های خفیف یا واکنش‌های شبه آلرژیک)",
      ],
    },

    {
      allergy: "ضدتشنج و روان‌پزشکی",
      subAllergy: [
        "Phenytoin",
        "Carbamazepine – واکنش‌های شدید مانند SJS/TEN",
        "Lamotrigine",
        "Valproic acid",
        "Haloperidol",
        "Lithium",
      ],
    },

    {
      allergy: "انسولین‌ها و داروهای دیابت",
      subAllergy: [
        "Insulin human / analogs: ممکن است در برخی افراد حساسیت داده باشند",
        "Metformin",
        "Sulfonylureas: Gliclazide, Glibenclamide (ممکن است در بیماران حساس به سولفا مشکل ایجاد کنند)",
      ],
    },

    {
      allergy: "سرکوب‌کننده‌های ایمنی و ضدسرطان",
      subAllergy: [
        "Methotrexate",
        "Cyclophosphamide",
        "Azathioprine",
        "Rituximab",
        "IVIG (ایمونوگلوبولین تزریقی) – حساسیت شدید در برخی بیماران",
      ],
    },

    {
      allergy: "داروهای ضد HIV و ویروسی",
      subAllergy: [
        "Nevirapine",
        "Abacavir – تست ژنتیکی HLA-B*5701 قبل از مصرف توصیه می‌شود",
        "Efavirenz",
        "Oseltamivir",
      ],
    },

    {
      allergy: "سایر موارد شایع یا خاص",
      subAllergy: [
        "Heparin / Enoxaparin – می‌توانند باعث HIT (Heparin-induced Thrombocytopenia) یا حساسیت شوند",
        "Contrast media (مواد حاجب) – به‌خصوص در CT یا آنژیوگرافی",
        "Protamine – در بیماران دیالیزی یا با سابقه ماهیگیری آلرژی‌زا",
        "Vaccine-related allergies",
        "Iron sucrose / Iron dextran",
        "Thiamine",
      ],
    },
  ];

  const [selectedAllergies, setSelectedAllergies] = useState("");

  const handleAllergies = (e) => {
    setSelectedAllergies(e.target.value);
  };

  const selectedSubAllergies = drugAllergies.find(
    (item) => item.allergy === selectedAllergies
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
    vitalSigns,
    firstDiagnosis,
    selectedDiagnosis,
    handleDiagnosis,
    selectedSubDiagnosis,
    comorbidities,
    selectedComorbiditie,
    handleComorbiditie,
    selectedSubComorbiditie,
    selectedSurgicalHistory,
    surgicalHistories,
    handleHistory,
    selectedSubSurgicalHistory,
    icuAdmissionReasons,
    selectedAdmissionReasons,
    handleAdmissionReasons,
    selectedSubAdmissionReasons,
    usedDrugs,
    selectedDrugs,
    handleDrugs,
    selectedSubDrugs,
    drugAllergies,
    selectedAllergies,
    handleAllergies,
    selectedSubAllergies,
    idError,
    isAnyError,
  };

  return (
    <FormContext.Provider value={sharedValues}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
