import styled from "styled-components";

export const Container = styled.div`
  background: #fcd9ee;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: #ff0e9b;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 5px;
  
`;

export const User = styled.h1`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 100px 0;
`;

export const Module = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadingModule = styled.h1`
  color: #ff0e9b;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ModuleContent = styled.div`
  background-color: #ff0e9b;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  margin-top: 25px;
  padding: 35px 15px;

  &:hover {
    background-color: #ff0e9b;
    transform: scale(1.05);
    cursor: pointer;
  }
`;