import React from "react";
import BorderCutBtnFill from "./Button/BorderCutBtnFill";

const Contact1 = ({ formData, setFormData, onSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    const isFormValid = requiredFields.every(
      (field) => formData[field] && formData[field].trim() !== "",
    );

    if (isFormValid) {
      onSubmit();
    } else {
      alert("すべての必須項目を入力してください。");
    }
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
          <div className="mb-7 h-1 w-15 bg-[#D9D9D9] md:w-30"></div>
          <div className="text-center">
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full bg-[#D9D9D9] text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
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
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 w-full border-t border-[#707070a0] md:w-[70%] md:px-5"
      >
        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">ご相談項目</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="text"
              name="consultation"
              value={formData.consultation}
              onChange={handleInputChange}
              placeholder="美肌、二重など"
              className="input_box"
            />
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">お名前</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="山田 太郎"
              className="input_box"
            />
            <p className="mt-2 text-[4.5vw] font-light md:text-lg">
              フルネームでご記入ください。
            </p>
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">お名前（フリガナ）</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="text"
              name="nameKana"
              value={formData.nameKana}
              onChange={handleInputChange}
              placeholder="ヤマダ タロウ"
              className="input_box"
            />
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">Eメール</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="input_box"
            />
            <input
              type="email"
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="input_box mt-4 md:mt-7"
            />
            <p className="mt-2 text-[4.5vw] font-light md:text-lg">
              確認のためもう一度入力してください。
            </p>
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">お問い合わせ内容</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="input_box"
              rows={5}
            />
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">電話番号</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input_box"
            />
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">ご年齢</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="input_box"
            />
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">性別</p>
            <div className="label_icon">必須</div>
          </div>
          <div className="flex gap-10 md:block md:w-[62%] lg:w-[70%]">
            <div className="flex gap-3 text-[5vw] md:mb-5 md:text-[20px]">
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-6"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
              男
            </div>
            <div className="flex gap-3 text-[5vw] md:text-[20px]">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-6"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
              女
            </div>
          </div>
        </div>

        <div className="input_item_wraper">
          <div className="label_wraper">
            <p className="label_title">
              何を見て当院をお知り
              <br />
              になりましたか？
            </p>
            <div className="label_icon h-9">必須</div>
          </div>
          <div className="md:w-[62%] lg:w-[70%]">
            <textarea
              rows={2}
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              className="input_box"
            />
          </div>
        </div>

        <div className="mt-20 flex w-full justify-center">
          <button
            type="submit"
            className="w-full hover:cursor-pointer sm:w-fit"
          >
            <BorderCutBtnFill text={"送信"} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact1;
