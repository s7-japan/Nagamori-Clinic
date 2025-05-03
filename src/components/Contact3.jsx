import React from "react";


const Contact3 = () => {
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
          <div className="mb-7 h-1 w-15 bg-[#82CCC4] md:w-30"></div>
          <div className="text-center">
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full bg-[#82CCC4] text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
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

      <div className="mx-auto mt-10 flex w-full flex-col items-center border-t border-[#707070a0] md:w-[70%] md:px-5">
        <p className="mt-16 text-left leading-9 font-light md:text-center md:text-lg md:leading-12 lg:text-xl lg:font-normal lg:text-[#707070] xl:text-[25px]">
          フォームに記載した内容は正常に送信されました。
          <br />
          ご返信に2~3日営業日かかることがあります。
          <br />
          ご了承くださいませ。
        </p>
      </div>
    </div>
  );
};

export default Contact3;
