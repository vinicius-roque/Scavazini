import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${props => props.background}) no-repeat center;
  background-size: 100% 100%;
`;

export const Left = styled.div`
  background: #FFFFFF;
  color: #FFFFFF;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 2rem;

  @media (max-width: 870px) {
    display: none;
  }
`;

export const Picture = styled.img`
  max-width: 450px;
  margin-top: 40%;

  @media (max-width: 870px) {
    width: 400px;
  }
`;

export const Right = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  @media (max-width: 870px) {
    margin-bottom: 200px;
  }

  @media (min-height: 870px) {
    justify-content: flex-start;
    margin-bottom: 300px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ff0e9b;
  padding: ${(props) => (props.error ? "30px" : "45px 30px 30px 30px")};
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  margin-top: 25%;
  transition: all 0s ease-in-out;
  margin-bottom: 15%;

   @media(max-width: 870px) {
    margin-bottom: -40%;
    margin-top: 30%;
  }

  @media(max-width: 430px) {
    margin-top: 40%;
  }
`;

export const Error = styled.div`
  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  color: #000000;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ff0e9b;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: #FFFFFF;
  color: #ff0e9b;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Register = styled.span`
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

export const LogoResponsive = styled.img`
  display: none;

  @media(max-width: 870px) {
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: -100px;
    border-radius: 50%;
  }
`;