import * as S from "./style";
import { useNavigate } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { RiHistoryLine } from "react-icons/ri";
import { ImTrophy } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";

export default function Footer({ page }) {
  const navigate = useNavigate();

  const hash = {
    home: page === "home",
    historic: page === "historic",
    ranking: page === "ranking",
    profile: page === "profile",
  };

  return (
    <>
      <S.Footer>
        <S.FooterContent>
          <AiFillHome
            onClick={() => navigate("/home")}
            className={hash.home}
          />
          <RiHistoryLine
            onClick={() => navigate("/historic")}
            className={hash.historic}
          />
          <ImTrophy
            onClick={() => navigate("/ranking")}
            className={hash.ranking}
          />
          <BsFillPersonFill
            onClick={() => navigate("/profile")}
            className={hash.profile}
          />
        </S.FooterContent>
      </S.Footer>
    </>
  );
}