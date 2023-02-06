import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/Logo.jpeg";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <S.Container background={Background}>
      <Left />
      <S.Start>
        <S.Text>Começar agora!</S.Text>
        <S.Button onClick={() => navigate("/sign-in")}>{">"}</S.Button>
      </S.Start>
    </S.Container>
  );

  function Left() {
    return (
      <S.Left>
        <S.BodyLeft>
          <S.Subtitle>Pratique seus conhecimentos sobre os nossos doces</S.Subtitle>
        </S.BodyLeft>
      </S.Left >
    );
  }
}