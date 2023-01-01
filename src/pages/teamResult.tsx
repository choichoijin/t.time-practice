import React from "react";
import { useRecoilValue } from "recoil";
import { userIdState } from "../atom";

function TeamResult() {
  const userId = useRecoilValue(userIdState);

  return (
    <div>
      <h1>팀 결과 페이지</h1>
      {userId ? (
        <>
          <h2>유진님의 아이디는 {userId}입니다</h2>
          <a href="/myResult">개인결과 페이지로</a>
        </>
      ) : (
        <h2>아이디 정보가 없습니다</h2>
      )}
    </div>
  );
}

export default TeamResult;
