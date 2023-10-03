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
            <img onClick={handleHomeClick} src={home} alt="home" height={40} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "2px" }} />
          </NavLink>
        ) : (
          null
        )}
        <NavLink>
          <a href="https://github.com/Will9214" target="_blank" rel="noreferrer" >
            <img src={gitHub} alt="git-hub" height={40} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

          </a>
        </NavLink>
        <NavLink>
          <a href="https://www.linkedin.com/in/william-ashley-a4978519b" target="_blank" rel="noreferrer" >
            <img src={linkedIn} alt="linked-in"  height={40} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}/>

          </a>
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
`;

const NavLink = styled.div`
  width: fit-content;
  padding: 0;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;