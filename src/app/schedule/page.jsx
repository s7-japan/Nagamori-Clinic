
import CalendarSchedule from "../../components/Calender/CalenderSchendule";

const Schedule = () => {
  return (
    <div>
      <div className="pt-28 md:pt-[10vw] px-6 md:px-[16vw]">
        <p className="text-[3vw] md:text-[1.3vw] mb-[1vw] text-[#00000063] md:text-black">
          ホーム 出勤予定表（予約ページ）
        </p>
        <div className="flex flex-col md:flex-row justify-start md:mb-4 lg:mb-6 xl:mb-7.5 mt-9">
          <p className="text-[clamp(2rem,3vw,4.125rem)] tracking-[0.2em] text-center">
            出勤予定表
          </p>
          <p className="text-[clamp(2rem,3vw,4.125rem)] tracking-[0.2em] text-center">
            （予約ページ）
          </p>
        </div>
      </div>
      <div className="w-full relative h-[55vw] md:h-[25vw] bg-[#EFEFEF] flex ">
        <img
          src="/images/new_hero.svg"
          alt=""
          className="w-full object-cover object-right md:object-center"
        />
        <img
          src="/images/sm_logo.png"
          className=" absolute md:hidden bottom-1 right-2"
          alt=""
        />
        <img
          src="/images/whitelogo.svg"
          className=" absolute hidden md:block bottom-2 right-3"
          alt=""
        />
      </div>
      <div className="px-6 text-[3vw] md:leading-[2.5vw] md:px-[13vw] mt-8 md:text-[1.4vw] mb-20 text-[#707070] font-[300]">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>

      <CalendarSchedule />
    </div>
  );
};

export default Schedule;
