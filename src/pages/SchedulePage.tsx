import "./SchedulePage.css";
import { useNavigate } from "react-router-dom";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  date: string;
}

const scheduleData: ScheduleItem[] = [
  {
    time: "13:00",
    title: "집결 및 출발",
    description: "대구 기쁨의 교회 2층에서 모여서 출발!",
    icon: "🚏",
    date: "5월 17일",
  },
  {
    time: "14:00",
    title: "도착",
    description: "느티나무 빌리지 도착 및 숙소배정!",
    icon: "🏡",
    date: "5월 17일",
  },
  {
    time: "15:00",
    title: "레크레이션",
    description: "레크레이션 시작! 다양한 상품!",
    icon: "🎮",
    date: "5월 17일",
  },
  {
    time: "18:00",
    title: "저녁 식사",
    description: "저녁 식사 및 휴식 & 설거지",
    icon: "🍽️",
    date: "5월 17일",
  },
  {
    time: "20:00",
    title: "예배",
    description: "짧은 찬양과 엄청난 숲지기의 설교!",
    icon: "🙏",
    date: "5월 17일",
  },
  {
    time: "20:30",
    title: "나눔 시간",
    description: "나눔 시간! 서로를 알아가고 서로의 마음을 나누는 시간!",
    icon: "💕",
    date: "5월 17일",
  },
  {
    time: "21:30",
    title: "무엇이든 물어보 L",
    description: "무엇이든 물어보세요! 사연도 읽어주고 답도 해줄게요!",
    icon: "💬",
    date: "5월 17일",
  },
  {
    time: "22:30",
    title: "자유 시간 및 취침",
    description: "자유로운 대화와 나눔의 시간",
    icon: "💤",
    date: "5월 17일",
  },
  {
    time: "08:00",
    title: "기상",
    description: "아침 기상 및 준비",
    icon: "🌅",
    date: "5월 18일",
  },
  {
    time: "09:00",
    title: "아침 식사",
    description: "아침 식사 및 휴식",
    icon: "🍳",
    date: "5월 18일",
  },
  {
    time: "10:00",
    title: "예배",
    description: "예배 시작! 온라인으로 드릴 예정입니다!",
    icon: "🙏",
    date: "5월 18일",
  },
  {
    time: "11:30",
    title: "정리",
    description: "짐 정리 및 숙소 정리",
    icon: "🧹",
    date: "5월 18일",
  },
  {
    time: "12:00",
    title: "귀가",
    description: "집으로 바로 귀가!",
    icon: "🚌",
    date: "5월 18일",
  },
];

const SchedulePage = () => {
  const navigate = useNavigate();
  const groupedSchedule = scheduleData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <div className="schedule-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← 뒤로가기
        </button>
        <h1 className="schedule-title">
          <span className="title-highlight">화음</span> 일박 일정표
        </h1>

        {Object.entries(groupedSchedule).map(([date, items]) => (
          <div key={date} className="schedule-day">
            <h2 className="day-title">{date}</h2>
            <div className="schedule-timeline">
              {items.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="time-badge">
                    <span className="time">{item.time}</span>
                  </div>
                  <div className="schedule-content">
                    <div className="schedule-icon">{item.icon}</div>
                    <div className="schedule-details">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SchedulePage;
