import React from "react";


const Contact3 = () => {
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
          <div className="w-15 md:w-30 bg-[#82CCC4] h-1 mb-7"></div>
          <div className="text-center">
            <div className="w-15 h-15 md:w-20 md:h-20 bg-[#82CCC4] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]">
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

      <div className="w-full md:w-[70%] mx-auto border-t mt-10 border-[#707070a0] md:px-5 flex flex-col items-center">
        <div className="w-20 h-20 flex rounded-full bg-[#00FFB1] items-center justify-center mt-10 mb-10 ">
          <img src="/images/tick.png" alt="" className="h-10 w-10" />
        </div>
        <p className="font-light leading-9 text-center">
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
