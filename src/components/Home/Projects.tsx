import { useEffect, useState } from "react";
import styled from "styled-components";
import LabelScrambler from "../../LabelScrambler";
import { useNavigate } from "react-router-dom";


const Projects = () => {

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
    <ProjectsDiv>

      <Button onClick={handleSeeProjectsClick} className="button-hover font-space" data-value="P R O J E C T S">
        P R O J E C T S
      </Button>

      {/* <Button className="button-hover font-space" data-value="ABOUT ME">
          ABOUT ME
      </Button> */}

    </ProjectsDiv>

    
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
    
    </>
  )
};

export default Projects;

const ProjectsDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  height: 100px;

  @media(max-width: 600px) {
    margin: 0;
    height: 60px;
    margin-bottom: 20px;
  }
`;

const Button = styled.div`
  margin: auto;
  margin-top: 20px;
  color: white;
  width: fit-content;
  height: 95px;
  font-size: 3.5rem;
  font-weight: 500;
  padding: 10px;
  
  &:hover {
    cursor: pointer;
    overflow: hidden;
  }

  @media(max-width: 600px) {
    font-size: 1.8rem;
    margin-top: 30px;
    height: 60px;
  }
  
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media(max-width: 600px) {
    display: block;
  }

  @media(max-width: 700px) {
    margin-bottom: 50px;
  }

  @media(min-width: 1230px) {
  }

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
  font-size: 1rem;
  font-weight: 700;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 10px;
  margin-bottom: 5%; 
  border: 2px solid lightgrey;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
  }

  @media(max-width: 600px) {
    width: 80%;
    margin: auto;
    margin-bottom: 5%;
  }

  @media(min-width: 601px) {
    width: 30%;
    font-size: 0.8rem;
  }

  @media(min-width: 982px) {
    font-size: 1rem;
  }

  @media(min-width: 1230px) {
  
    width: 25%;
  }
  
`;

const FlashcardProjectButton = styled.div`
  font-family: "Bangers";
  width: 30%;
  height: 205px;
  background-color: rgba(255, 253, 208, 0.5);
  font-size: 1.2rem;
  letter-spacing: .5px;
  font-weight: 400;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 10px;
  margin-bottom: 5%;  
  border: 2px solid lightgrey;

  &:hover {
    background-color: rgba(255, 253, 208, 0.3);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
  }

  @media(max-width: 600px) {
    width: 80%;
    margin: auto;
    margin-bottom: 5%;
  }

  @media(min-width: 601px) {
    width: 30%;
    font-size: 0.95rem;
  }

  @media(min-width: 1230px) {
    width: 25%;
  }
  
`;

const ProjectDescription = styled.div`
  padding: 10px;
  line-height: 1.4;

  @media(max-width: 700px) {
    padding: 5px;
  }
`;