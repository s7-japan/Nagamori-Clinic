import React from "react";
import emailjs from "emailjs-com";

const Contact2 = ({ formData, setFinalConfirmation }) => {
  const sendEmail = () => {
    const emailParams = {
      consultation: formData.consultation,
      name: formData.name,
      nameKana: formData.nameKana,
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
      age: formData.age,
      gender: formData.gender === "male" ? "男" : "女",
      referralSource: formData.referralSource,
    };

    emailjs
      .send(
        "service_d4n1nzm",
        "template_qon1f9i",
        emailParams,
        "F6gcOpd9AYgZmi-dS"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setFinalConfirmation(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 sikita">
        Contact
      </h1>
      <div className="w-[152px] h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
      <p className="text-center mb-15 text-[4vw] md:text-[1.3vw] font-light">
        お問合せ
      </p>

      <div className="w-full flex justify-center mb-15">
        <div className="flex items-center">
          <div className="text-center">
            <div
              className={`w-15 h-15 md:w-20 md:h-20 bg-[#82CCC4] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]`}
            >
              1
            </div>
            <p className="mt-2 font-light">ご入力</p>
          </div>
          <div className="w-15 md:w-30 bg-[#82CCC4] h-1 mb-7"></div>
          <div className="text-center">
            <div
              className={`w-15 h-15 md:w-20 md:h-20 bg-[#82CCC4] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]`}
            >
              2
            </div>
            <p className="mt-2 font-light">ご確認</p>
          </div>
          <div className="w-15 md:w-30 bg-[#D9D9D9] h-1 mb-7"></div>
          <div className="text-center">
            <div className="w-15 h-15 md:w-20 md:h-20 bg-[#D9D9D9] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]">
              3
            </div>
            <p className="mt-2 font-light">送信</p>
          </div>
        </div>
      </div>

      <p className="text-left md:text-center leading-9 md:leading-12 font-light">
        下記の入力フォームに必須事項をご入力の上、
        <br />
        「入力内容を確認する」ボタンを押してください。
        <br />
        ※WEBでのご予約は受け付けておりません。
      </p>
      <div className="w-full md:w-[70%] mx-auto border-t mt-10 border-[#707070a0] md:px-5">
        <div className="md:flex items-center justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              ご相談項目
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.consultation}</p>
          </div>
        </div>

        <div className="md:flex items justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">お名前</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.name}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              お名前（フリガナ）
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.nameKana}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">Eメール</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.email}</p>
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              お問い合わせ内容
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.message}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">電話番号</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.phone}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">ご年齢</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.age}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-15 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">性別</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%] flex gap-10 md:block">
            <p>{formData.gender === "male" ? "男" : "女"}</p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-10">
            <p className="font-light text-[5.5vw] md:text-[1.3vw] md:leading-10">
              何を見て当院をお知り
              <br />
              になりましたか？
            </p>
            <div className="bg-[#D93636] h-9 text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <p>{formData.referralSource}</p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-20">
          <img onClick={sendEmail} src="/images/btn5.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact2;
