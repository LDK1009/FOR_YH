import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const UserContents = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
  
      const autoScroll = () => {
        container.scrollTop += 1; // 1px씩 스크롤을 내립니다.
  
        // 스크롤이 맨 아래에 도달하면 맨 위로 이동
        if (container.scrollTop === (container.scrollHeight - container.clientHeight)) {
          container.scrollTop = 0;
        }
      };
  
      // 100ms마다 autoScroll 함수를 호출하여 자동 스크롤을 구현
      const intervalId = setInterval(autoScroll, 20);
  
      // 컴포넌트가 언마운트될 때 clearInterval을 통해 타이머를 정리합니다.
      return () => clearInterval(intervalId);
    }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정
  
  return (
    <>
      <Container 
            ref={containerRef}
            //onScroll={handleScroll}
            >
        <ul>
          <ListCategotyBox>
            <li>武藝</li>
            <IndentBox>
              - 태권도 2단
              <br />
              - 유도 2단
              <br />
              - 복싱
              <br />
              - 주짓수 경험有
              <br />
              - 해동검도 크루
              <br />
            </IndentBox>
          </ListCategotyBox>

          <ListCategotyBox>
            <li>HEALTHY MAN</li>
            <IndentBox>
              - 대전 대표 플로어볼 대회 출전
              <br />
              - 구 대표 육상 대회 출전
              <br />
              - 초등학교 장기자랑 리듬줄넘기부 경험 다수
              <br />
              - 초등학교 제기부 탈락
              <br />
              - 한강시민 마라톤 (완주 메달 수상)
              <br />
              - 천재교육 초등 체육 교과서 등재
              <br />
              - 풀업 최대 17회
              <br />
              - HYEOB.COPERATION (CEO)
              <br />
              - 3대 662 lb
              <br />
              - 서전트 점프 3m
              <br />
              - 이용협배 한발 두발 1위
              <br />
              - 슬릭백 기술 보유
              <br />
              - 향설 1 생활관 헬스 개근상
              <br />
            </IndentBox>
          </ListCategotyBox>
          <ListCategotyBox>
            <li>主食</li>
            <IndentBox>
              - 밥<br />
              - 고기
              <br />
              - 김치
              <br />
            </IndentBox>
          </ListCategotyBox>

          <ListCategotyBox>
            <li>BRAIN</li>
            <IndentBox>
              - 한자 준 3급
              <br />
              - 일본어 다소 유창현
              <br />
              - 중국어 다소 유창현
              <br />
              - 한국어 매우 유창현
              <br />
              - 영어 매우 유창현
              <br />
              - 컴퓨터 활용 능력 상中 상 (ITQ 1급)
              <br />
              - 한컴 타자 (한타 500, 영타 250)
              <br />
              - 순천향대학교 기계공학과 재학중
              <br />
            </IndentBox>
          </ListCategotyBox>
          <ListCategotyBox>
            <li>餘暇</li>
            <IndentBox>
              - 격한 운동
              <br />
              - 산책
              <br />
              - 독서
              <br />
              - 블로그
              <br />
            </IndentBox>
          </ListCategotyBox>
          <ListCategotyBox>
            <li>所信</li>
            <IndentBox>
              - 콜라 vs 사이다 = 사이다 <br />
              - 코카콜라vs펩시 = 저렴한거
              <br />
              - 민초파 지지
              <br />
              - 진라면에 대한 중립 표명
              <br />
              - 치킨 피자 햄버거 안먹음
              <br />
              - 마라탕 로제떡볶이 안 먹음
                            <br />
              - 여자친구한테는 관대한 편
                            <br />
            </IndentBox>
          </ListCategotyBox>
          <ListCategotyBox>
            <li>性向</li>
            <IndentBox>
              - 슈퍼T(선택적 F)
              <br />
              - 칼답 지향
              <br />
              - 피간섭 지양
              <br />
              - 능간섭 지향
              <br />
            </IndentBox>
          </ListCategotyBox>
          <ListCategotyBox>
            <li>理想型</li>
            <IndentBox>
              - 성숙한 여자
              <br />
              - 주관적 미인 (콩깍지 가능)
              <br />
              - 칭얼 지양
              <br />
              - 자급자족 능력 보유자
              <br />
              - 적당한 애교 보유자
              <br />
            </IndentBox>
          </ListCategotyBox>
        </ul>
      </Container>
    </>
  );
};

const IndentBox = styled.div`
  margin-left: 20px;
`;

const ListCategotyBox = styled.div`
  margin-bottom: 20px;
`;

const Container = styled.div`
  overflow: auto;
  height: 300px;
  width:100%;
  &::-webkit-scrollbar {
    display: none;
  }
  border:2px solid #2e2567;
  background-color:#d5e7ff;
`;

export default UserContents;
