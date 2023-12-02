import React from "react";
import styled from "styled-components";
import UserContents from "../components/UserContents";
import profileImgSrc from "../asset/profile.jpg";
import statusImgSrc from "../asset/status.png";

const Main = () => {
  const profileText1 = [
    "이름 : 이용협",
    "사는곳 : 대전",
    "MBTI : ESTP",
    "나이 : 22",
    "성별 : 남",
  ];
  const profileText2 = [
    "머리 : 다시기를까",
    "시력 : -9 -7",
    "키 : 180cm 혹은 그 이상",
    "몸무게 : 65kg 이하",
    "성격 : 사람다움",
  ];

  return (
    <>
      <Container>
        <MainProfileBox>
          <ProfileImageWrap>
            <ProfileImage src={profileImgSrc} />
            <ProfileImageDesignBox1 />
            <ProfileImageDesignBox2 />
            <ProfileImageDesignBox3 />
          </ProfileImageWrap>
          <ProfileText>
            {profileText1.map((item, itemIndex) => (
              <div
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #2e2567",
                }}
                key={itemIndex}
              >
                {item}
              </div>
            ))}
          </ProfileText>
          <ProfileText>
            {profileText2.map((item, itemIndex) => (
              <div
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #2e2567",
                }}
                key={itemIndex}
              >
                {item}
              </div>
            ))}
          </ProfileText>
        </MainProfileBox>
        <CategoryText>약력</CategoryText>
        <UserContents />
        <FlexBox>
          <StatusImg src={statusImgSrc} />
        </FlexBox>
        <FlexBox>
          {/* <a href={`sms:01028372708?body=${profileText1[0]}`}>문자 전송</a> */}
          <MessageButton href="sms:01028372708">여친 지원</MessageButton>
        </FlexBox>
      </Container>
    </>
  );
};

const StatusImg = styled.img`
  width: 300px;
  height: 300px;
  margin-top:15px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageButton = styled.a`
  width: 200px;
  height: 40px;
  text-align: center;
  background-color: #FFD28F;
  line-height: 40px;
  text-decoration: none; /* 밑줄 없애기 */
  color: white;
  font-family: "TheJamsil5Bold";
  border-radius: 10px;
  margin-top:25px;
  &:hover{
    opacity:0.9;
    scale:1.1;
  }
`;

const ProfileImageWrap = styled.div`
  position: relative;
  width: 100px;
  height: 120px;
`;
const ProfileImageDesignBox1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(12deg);
  border: 2px solid #ffffcd;
  width: 100px;
  height: 120px;
`;

const ProfileImageDesignBox2 = styled(ProfileImageDesignBox1)`
  transform: translate(-50%, -50%) rotate(-5deg);
  border: 2px solid #f7f3ea;
`;
const ProfileImageDesignBox3 = styled(ProfileImageDesignBox1)`
  transform: translate(-50%, -50%) rotate(-10deg);
  border: 2px solid #5c5ca8;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 120px;
  border: 2px solid #2e2567;
`;

const ProfileText = styled.div`
  margin-left: 20px;
  font-size: 13px;
`;
const MainProfileBox = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const Container = styled.div`
  padding: 20px;
  background-color: #edf5ff;
`;

const CategoryText = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;
export default Main;
