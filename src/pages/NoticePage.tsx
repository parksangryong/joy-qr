import "./NoticePage.css";

const NoticePage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className="notice-container">
        <h1 className="notice-title">
          <span className="title-highlight">화음</span> 일박 안내
        </h1>

        <div className="notice-grid">
          {/* 포스터 섹션 */}
          <div className="notice-section poster-section">
            <h2 className="section-title">일박 포스터</h2>
            <div className="poster-card">
              <img
                src="/poster.jpeg"
                alt="여행 포스터"
                className="poster-image"
              />
            </div>
            <a href="/timetable" className="timetable-button">
              타임테이블 보러가기
            </a>
          </div>

          {/* 여행 정보 섹션 */}
          <div className="notice-section info-section">
            <h2 className="section-title">일박 정보</h2>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">🚏</div>
                <div className="info-content">
                  <h3>집결</h3>
                  <p>대구 기쁨의 교회 2층, 오후 1시</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">⏰</div>
                <div className="info-content">
                  <h3>시간</h3>
                  <p>2025년 5월 17일 ~ 5월 18일</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>숙소</h3>
                  <p>
                    경북 영천시 청통면 치일들길 133-20
                    <br />
                    침산제일교회 : 느티나무빌리지
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>문의번호</h3>
                  <p>010-5011-6089</p>
                </div>
              </div>
            </div>
          </div>

          {/* 준비물 섹션 */}
          <div className="notice-section checklist-section">
            <h2 className="section-title">준비물 체크리스트</h2>
            <div className="checklist">
              <div className="checklist-item">
                <div className="checklist-icon">👕</div>
                <span>각자 옷</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">🧺</div>
                <span>수건</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">🧴</div>
                <span>세면도구</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">❤️</div>
                <span>소망하는 마음</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">👟</div>
                <span>슬리퍼</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">💊</div>
                <span>개인 상비약</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">🥤</div>
                <span>개인 텀블러</span>
              </div>
              <div className="checklist-item">
                <div className="checklist-icon">🍪</div>
                <span>개인 간식</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticePage;
