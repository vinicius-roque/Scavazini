import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Logo from "../../assets/LogoRedondo.jpeg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />
      </S.Header>
      <S.NavBar>
        <S.NavItem onClick={() => navigate("/home")}>Home</S.NavItem>
        <S.NavItem onClick={() => navigate("/historic")}>Histórico</S.NavItem>
        <S.NavItem onClick={() => navigate("/ranking")}>Ranking</S.NavItem>
        <S.NavItem onClick={() => navigate("/profile")}>Perfil</S.NavItem>
      </S.NavBar>
    </>
  );
}