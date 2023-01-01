import React from "react";
import macaron from "./macaron.png";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { userIdState } from "../atom";

function MyResult() {
  const userId = useRecoilValue(userIdState);
  const resultCard = useRef<HTMLDivElement>(null);
  const onHtmlToPng = () => {
    resultCard.current &&
      html2canvas(resultCard.current).then((canvas) => {
        onSaveAs(canvas.toDataURL("image/png"), "result.png");
      });
  };

  const onSaveAs = (uri: string, filename: string) => {
    const link = document.createElement("a");
    link.href = uri;
    link.download = filename;
    link.click();
  };

  return (
    <>
      <StResultCard ref={resultCard}>
        <header>유진님의 결과</header>
        <h1>재충전이 필요한 마카롱</h1>
        <h2>유진님의 아이디는 {userId}입니다</h2>
        <img src={macaron} alt="마카롱" />
      </StResultCard>
      <button onClick={onHtmlToPng}>다운로드</button>
      <a href="/teamResult">팀 결과 페이지로</a>
    </>
  );
}

export default MyResult;

const StResultCard = styled.div`
  width: 300px;
  height: 500px;
  margin-top: 50px;
  background-color: #fbf7ed;
`;
