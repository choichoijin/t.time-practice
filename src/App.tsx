import React from "react";
import macaron from "./macaron.png";
import styled from "styled-components";

function App() {
  return (
    <>
      <StResultCard>
        <header>유진님의 결과</header>
        <h1>재충전이 필요한 마카롱</h1>
        <img src={macaron} alt="마카롱" />
      </StResultCard>
      <button>다운로드</button>
    </>
  );
}

export default App;

const StResultCard = styled.div`
  width: 500px;
  height: 600px;
  margin-top: 50px;
  background-color: #fbf7ed;
`;
