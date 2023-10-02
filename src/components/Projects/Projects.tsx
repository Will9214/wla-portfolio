import styled from "styled-components";
import FirstProject from "./FirstProject";


const Projects = () => {

  return(
    <ProjectsContainer>
      <FirstProject />
    </ProjectsContainer>
  )
};

export default Projects;

const ProjectsContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  padding-bottom: 4%;
  padding-top:4%;
  margin-bottom: 4%;
  background-color: #36323E;
  background: linear-gradient(
    to top right,
    rgba(40, 44, 52, 0.6), 15%,
    rgba(212, 124, 137, 0.6), 20%,
    rgba(40, 44, 52, 0.6), 30%,
    rgba(147, 112, 216, 0.6), 35%,
    rgba(40, 44, 52, 0.6), 49%,
    rgba(97, 218, 251, 0.6), 51%,
    rgba(40, 44, 52, 0.6), 65%,
    rgba(147, 112, 216, 0.6), 70%,
    rgba(40, 44, 52, 0.6), 80%,
    rgba(212, 124, 137, 0.6), 85%,
    rgba(40, 44, 52, 0.6)
  );
  filter: drop-shadow(2px 2px 10px grey);
  
`;
// #163041
// #193548;

// #132739