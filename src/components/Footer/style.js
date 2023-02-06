import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #ff0e9b;
  width: 100vw;
  max-width: 100vw;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 30px;
  }

  .true {
    color: #FFFFFF;
  }
`;