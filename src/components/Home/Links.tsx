import { useEffect } from "react";
import styled from "styled-components";
import LabelScrambler from "../../LabelScrambler";
import { useNavigate } from "react-router-dom";


const Links = () => {

  useEffect(() => {
    LabelScrambler();
  }, []);

  const navigate = useNavigate();

  const handleSeeProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <LinksDiv>

      <Button onClick={handleSeeProjectsClick} className="button-hover font-space" data-value="SEE PROJECTS">
          SEE PROJECTS
      </Button>

      <Button className="button-hover font-space" data-value="ABOUT ME">
          ABOUT ME
      </Button>

    
    </LinksDiv>
  )
};

export default Links;

const LinksDiv = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 0 25%;
  justify-content: space-around;
  margin-bottom: 50px;
`;

const Button = styled.div`
  color: white;
  width: 250px;
  height: 46px;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 1.5em;
  font-weight: 500;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 2px;  

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
  }
  
`;
