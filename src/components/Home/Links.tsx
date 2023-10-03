import { useEffect, useState } from "react";
import styled from "styled-components";
import LabelScrambler from "../../LabelScrambler";
import { useNavigate } from "react-router-dom";


const Links = () => {

  useEffect(() => {
    LabelScrambler();
  }, []);

  const [showProjectLinks, setShowProjectLinks] = useState(false);

  const navigate = useNavigate();

  const handleSeeProjectsClick = () => {
    setShowProjectLinks(!showProjectLinks);
  };
  
  const handleFitnessAppClick = () => {
    navigate("/projects/fitnbegreat");
  };

  const handleFlashcardAppClick = () => {
    navigate("/projects/flashcard");
  };

  return (
    <>
    <LinksDiv>

      <Button onClick={handleSeeProjectsClick} className="button-hover font-space" data-value="SEE PROJECTS">
          SEE PROJECTS
      </Button>

      <Button className="button-hover font-space" data-value="ABOUT ME">
          ABOUT ME
      </Button>

    </LinksDiv>

    {showProjectLinks ? (
      <ProjectLinks>
        <ProjectButton onClick={handleFitnessAppClick}>
          <ProjectName>Fit'N'BeGreat</ProjectName>
          <ProjectDescription>
            Fit'N'BeGreat is an intuitive fitness tracking app enabling seamless activity creation, search, and tracking for efficient workout management, both in real time at the gym and post-workout.
          </ProjectDescription>
        </ProjectButton>

        <FlashcardProjectButton onClick={handleFlashcardAppClick}>
          <ProjectName style={{ fontFamily: "Bangers", background: "#fffdd0", color: "#282c34" }}>
            Flashcard
          </ProjectName>
          <ProjectDescription style={{ lineHeight: "1.2" }}>
            A simple full stack application to help myself reinforce software engineering topics, terms, and concepts. Built with responsive web design so I can study anywhere I have my phone. 
          </ProjectDescription>
        </FlashcardProjectButton>

        <ProjectButton>
          <ProjectName>
            Coming Soon...
          </ProjectName>
          <ProjectDescription>
            Metronome web application, and web pages for local RDU bands.
          </ProjectDescription>
        </ProjectButton>
      </ProjectLinks>
    ) : (
      null
    )}
    </>
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

const ProjectLinks = styled.div`
  display: flex;
  margin-left: 5%;

`;

const ProjectName = styled.div`
  background-color: #282c34;
  border-radius: 5px 5px 0 0;
  font-size: 1.5rem;
  color: white;

`;

const ProjectButton = styled.div`
  font-family: sans-serif;
  width: 26%;
  height: 205px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 1em;
  font-weight: 700;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 10px;
  margin-bottom: 5%;  
  margin-left: 5%;
  border: 2px solid lightgrey;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
  }
  
`;

const FlashcardProjectButton = styled.div`
  font-family: "Bangers";
  width: 26%;
  height: 205px;
  background-color: rgba(255, 253, 208, 0.5);
  font-size: 1.2rem;
  letter-spacing: .5px;
  font-weight: 400;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 10px;
  margin-bottom: 5%;  
  margin-left: 5%;
  border: 2px solid lightgrey;

  &:hover {
    background-color: rgba(255, 253, 208, 0.3);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
  }
  
`;

const ProjectDescription = styled.div`
  padding: 10px;
  line-height: 1.4;
`;