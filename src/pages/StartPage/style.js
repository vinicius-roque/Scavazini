import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: 77%;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1058px) {
    flex-direction: column;
  };

  @media (max-width: 768px) {
    justify-content: center;
    background-size: contain;
  };
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Start = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.h2`
  color: #ff0e9b;
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  };
`;

export const Button = styled.button`
  background: #ff0e9b;
  color: #ffffff;
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  border-radius: 50%;
  border: none;
  outline: none;
  margin-bottom: 610px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  };
`;

export const BodyLeft = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  margin-left: 18rem;
  margin-top: 6rem;

  @media (max-width: 1058px) {
    display: none;
  };
`;

export const Subtitle = styled.h2`
  color: #ff0e9b;
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 2.8rem;
`;