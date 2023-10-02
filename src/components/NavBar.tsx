import styled from "styled-components";
import { Row } from "react-bootstrap";
import gitHub from "../logos/github.svg";
import linkedIn from "../logos/linkedin.svg";

const NavBar = () => {

  return (
    <NavBarDiv>
      <Row className="justify-content-end">
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