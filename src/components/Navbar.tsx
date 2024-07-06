import styled from "styled-components";
import FutureEngineLogo from "../assets/FutureEngineLogo.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  position: fixed;
  height: 100px;
  border-bottom: 1px solid #8c8c8c;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 40px;
  margin-left: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 2rem;
`;

const Button = styled.button`
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #b0b0b0;
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={FutureEngineLogo} alt="Future Engine" />
      <ButtonGroup>
        <Button>Login</Button>
        <Button>Signup</Button>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
