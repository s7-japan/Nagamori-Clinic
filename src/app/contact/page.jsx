import React, { useState } from "react";
import Contact1 from "../components/Contact1";
import Contact2 from "../components/Contact2";
import Contact3 from "../components/Contact3";

const Contact = () => {
  const [formData, setFormData] = useState({
    consultation: "", // ご相談項目
    name: "", // お名前
    nameKana: "", // お名前（フリガナ）
    email: "", // Eメール
    emailConfirm: "", // Eメール確認
    message: "", // お問い合わせ内容
    phone: "", // 電話番号
    age: "", // ご年齢
    gender: "", // 性別
    referralSource: "", // 何を見て当院をお知りになりましたか？
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [finalConfirmation, setFinalConfirmation] = useState(false);

  const isFormComplete = () => {
    const requiredFields = [
      "consultation",
      "name",
      "nameKana",
      "email",
      "emailConfirm",
      "message",
      "phone",
      "age",
      "gender",
      "referralSource",
    ];

    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const handleFormSubmit = () => {
    if (isFormComplete()) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="pt-30 px-6">
      {finalConfirmation ? (
        <Contact3 />
      ) : !showConfirmation ? (
        <Contact1
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Contact2
          formData={formData}
          setFinalConfirmation={setFinalConfirmation}
        />
      )}
    </div>
  );
};

export default Contact;
