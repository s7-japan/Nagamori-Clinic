import React from "react";
import emailjs from "emailjs-com";
import BorderCutBtnFill from "./Button/BorderCutBtnFill";

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
        "F6gcOpd9AYgZmi-dS",
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text,
          );
          setFinalConfirmation(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        },
      );
  };

  return (
    <div>
      <div>
        <h1 className="sikita text-center text-5xl md:text-[54px] lg:text-[60px] xl:text-[68px]">
          Contact
        </h1>
        <div className="mx-auto my-4 h-[1.5px] w-[152px] bg-[#707070] md:my-4.5 lg:my-5 xl:my-6"></div>
        <p className="text-center text-2xl lg:text-[25px]">お問合せ</p>

        <div className="my-12 flex w-full items-center justify-center xl:mt-[94px] xl:mb-[66px]">
          <div className="text-center">
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full bg-[#82CCC4] text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
            >
              1
            </div>
            <p className="mt-2 font-light">ご入力</p>
          </div>
          <div className="mb-7 h-1 w-15 bg-[#82CCC4] md:w-30"></div>
          <div className="text-center">
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full bg-[#82CCC4] text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
            >
              2
            </div>
            <p className="mt-2 font-light">ご確認</p>
          </div>
          <div className="mb-7 h-1 w-15 bg-[#D9D9D9] md:w-30"></div>
          <div className="text-center">
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full bg-[#D9D9D9] text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
            >
              3
            </div>
            <p className="mt-2 font-light">送信</p>
          </div>
        </div>

        <p className="text-left leading-9 font-light md:text-center md:text-lg md:leading-12 lg:text-xl lg:font-normal lg:text-[#707070] xl:text-[25px]">
          下記の入力フォームに必須事項をご入力の上、
          <br />
          「入力内容を確認する」ボタンを押してください。
          <br />
          ※WEBでのご予約は受け付けておりません。
        </p>
      </div>
      <div className="large-con mt-10 border-t border-[#707070a0]">
        <div className="px-6">
          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">ご相談項目</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.consultation}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">お名前</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.name}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">お名前（フリガナ）</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.nameKana}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">Eメール</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.email}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">お問い合わせ内容</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.message}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">電話番号</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.phone}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">ご年齢</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.age}</p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">性別</p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">
                {formData.gender === "male" ? "男" : "女"}
              </p>
            </div>
          </div>

          <div className="input_item_wraper">
            <div className="label_wraper2">
              <p className="label_title">
                何を見て当院をお知り
                <br />
                になりましたか？
              </p>
              <div className="label_icon">必須</div>
            </div>
            <div className="md:w-[50%] xl:w-[70%]">
              <p className="detail_item">{formData.referralSource}</p>
            </div>
          </div>

          <div className="mt-20 flex w-full justify-center">
            <button
              onClick={sendEmail}
              className="w-full hover:cursor-pointer sm:w-fit"
            >
              <BorderCutBtnFill text={"送信"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
