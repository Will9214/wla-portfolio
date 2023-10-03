import styled from "styled-components";
import { Row } from "react-bootstrap";
import gitHub from "../logos/github.svg";
import linkedIn from "../logos/linkedin.svg";
import home from "../logos/home.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isHome = (window.location.pathname === "/");
  const navigate = useNavigate();


  const handleHomeClick = () => {
    navigate("/");
  }


  return (
    <NavBarDiv>
      <Row className="justify-content-end">
        {!isHome ? (
          <NavLink>
            <Img onClick={handleHomeClick} src={home} alt="home" style={{ padding: "2px" }} />
          </NavLink>
        ) : (
          null
        )}
        
          <NavLink href="https://github.com/Will9214" target="_blank" rel="noreferrer" >
            <Img src={gitHub} alt="git-hub" />
          </NavLink>
        
          <NavLink href="https://www.linkedin.com/in/william-ashley-a4978519b" target="_blank" rel="noreferrer" >
            <Img src={linkedIn} alt="linked-in" />

          </NavLink>

      </Row>
    </NavBarDiv>
  )
};

export default NavBar;

const NavBarDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: #066;
  margin: 1.5rem 3rem;
  padding-right: 0;

  @media(max-width: 700px) {
    margin: 0.6rem 1.5rem;
  }
`;

const NavLink = styled.a`
  width: fit-content;
  padding: 0;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);

  @media(max-width: 700px) {
    height: 30px;
  }
`;