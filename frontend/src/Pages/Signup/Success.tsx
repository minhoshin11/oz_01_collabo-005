import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Success() {
  const navigate = useNavigate();

  return (
    <SuccessPage>
      <Thanks>
        LANDING과
        <br /> 함께 해주셔서 감사합니다.
      </Thanks>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하러 가기
      </button>
    </SuccessPage>
  );
}

export default Success;

const SuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  margin: 0 15%;
  width: 70%;
  height: auto;
`;
const Thanks = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 20px;
`;
