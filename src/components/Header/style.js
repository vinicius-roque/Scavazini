import styled from "styled-components";

export const Header = styled.header`
  background: #ff0e9b;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -55px;
`;

export const Logo = styled.img`
  width: 150px;
  border-radius: 100px;
  margin-top: 60px;
`;

export const NavBar = styled.nav`
  background: #ff0e9b;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -80px;
  padding-bottom: 20px;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 20px 60px;

  &:hover {
    background-color: #FFFFFF;
    color: #ff0e9b;
    border-radius: 30px;
  }
`;