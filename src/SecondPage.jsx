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
    <form onSubmit={handleForm}>
      <h2>مرحله دوم</h2>
      {/* all previous fields unchanged */}
      <button type="submit">ثبت نهایی</button>
    </form>
  );
}

export default SecondPage;
