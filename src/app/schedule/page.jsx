import CalendarSchedule from "@/components/Calender/CalenderSchendule";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-[58px] md:gap-[70px] lg:gap-[85px] xl:gap-[107px]">
      <div>
        <div className="large-con mt-5 px-6 md:mt-7 lg:mt-8 xl:mt-10">
          <p className="text-xs opacity-60 md:text-base md:opacity-100 lg:text-2xl xl:text-[28px]">
            ホーム 出勤予定表（予約ページ）
          </p>
          <div className="mt-9 flex flex-col justify-start md:mb-4 md:flex-row lg:mb-6 xl:mb-7.5">
            <p className="text-center text-[clamp(2rem,3vw,4.125rem)] tracking-[0.2em]">
              出勤予定表
            </p>
            <p className="mb-5 text-center text-[clamp(1.25rem,3vw,4.125rem)] tracking-[0.2em] md:mb-0">
              （予約ページ）
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/assets/new_hero.svg"
            alt="new_hero"
            className="w-full object-cover object-right md:object-center"
          />
          <img
            src="/assets/sm_logo.png"
            className="absolute right-2 bottom-1 md:hidden"
            alt="small_logo"
          />
          <img
            src="/assets/whitelogo.svg"
            className="absolute right-3 bottom-2 hidden md:block"
            alt="whiteLogo"
          />
        </div>
        <div className="large-con mt-[53px] px-6 leading-[36px] font-light md:mt-9 md:text-xl md:leading-[40px] lg:mt-8 lg:text-2xl lg:leading-[48px] xl:text-3xl xl:leading-[51px]">
          当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
        </div>
      </div>

      <CalendarSchedule />
    </div>
  );
};

export default Schedule;
