import styled from "styled-components";
import ScreenshotHome from "./screenshots/completed-workouts.jpeg";
import ScreenshotExerciseSearch from "./screenshots/exerxise-api-search.jpeg";
import ScreenshotWorkout from "./screenshots/workout-mobile.jpeg";
import ScreenshotActivityList from "./screenshots/activity-list-mobile.jpeg";
import ScreenshotActivityWorkout from "./screenshots/activity-in-workout-mobile.jpeg";

const FitNBeGreat = () => {
 return (
  <FirstProjectContainer>

    <LargeTextDiv>
      Introducing <FitNBeGreatAnchor href="https://fitnbegreat-frontend.onrender.com/" target="_blank" >Fit'N'BeGreat</FitNBeGreatAnchor>,
      </LargeTextDiv>
      
      <MediumTextDiv>an innovative fitness tracking application designed for seamless user experience. Elevate your fitness journey with features tailored for efficiency and ease of use.</MediumTextDiv>

    <PCImage src={ScreenshotHome} alt="homepage-pic" />

    <MediumTextDiv>Craft a curated list of bespoke activities, saving you valuable time during workout planning.</MediumTextDiv>

    <MediumTextDiv>Customized workouts allow you to tailor your exercise routines by seamlessly amalgamating diverse activities to align with your unique fitness objectives.</MediumTextDiv>

    <MediumTextDiv>Store and review a comprehensive history of your workouts, allowing for precise progress tracking and strategic refinement of routines.</MediumTextDiv>

    <MobileImage src={ScreenshotActivityList} alt="activity-list-pic" />

    <MobileImage src={ScreenshotWorkout} alt="workout-pic" />
    
    <MobileImage src={ScreenshotActivityWorkout} alt="activity-workout-pic" />
    
    <MediumTextDiv>Navigate effortlessly through our user-friendly interface, and use on your mobile devices thanks to responsive web design.</MediumTextDiv>

    <MediumTextDiv>Access an expansive database of exercises, enabling swift searches and streamlined addition to your regimen.</MediumTextDiv>
    
    <PCImage src={ScreenshotExerciseSearch} alt="exercise-search-pis" />

    <MediumTextDiv >Built with:</MediumTextDiv>
    
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        <LI>React</LI>
        <LI>Redux Toolkit</LI>
        <LI>Bootstrap</LI>
        <LI>Styled Components</LI>
        <LI>Yup Schema Validation</LI>
      </ul>
      <ul>  
        <LI>JWT Authentication</LI>
        <LI>Passport</LI>
        <LI>Express</LI>
        <LI>Mongoose</LI>
        <LI>MongoDB Atlas</LI>
      </ul>
    </div>
  </FirstProjectContainer>
 )
};

export default FitNBeGreat;

const FirstProjectContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  padding-bottom: 4%;
  padding-top:4%;
  margin-bottom: 4%;
  background-color: #36323E;
  background: linear-gradient(
    to top right,
    rgba(40, 44, 52, 0.3), 15%,
    rgba(212, 124, 137, 0.3), 20%,
    rgba(40, 44, 52, 0.3), 30%,
    rgba(147, 112, 216, 0.3), 35%,
    rgba(40, 44, 52, 0.3), 49%,
    rgba(97, 218, 251, 0.3), 51%,
    rgba(40, 44, 52, 0.3), 65%,
    rgba(147, 112, 216, 0.3), 70%,
    rgba(40, 44, 52, 0.3), 80%,
    rgba(212, 124, 137, 0.3), 85%,
    rgba(40, 44, 52, 0.3)
  );
  filter: drop-shadow(2px 2px 10px grey);
`;

const FitNBeGreatAnchor = styled.a`
  font-weight: 700;
  font-size: 4rem;
  color: white;

  &:hover {
    color: grey;
  }

  @media (max-width: 700px) {
    font-size: 3.2rem;
  }

  @media(max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const LargeTextDiv = styled.div`
  width: 85%;
  margin-left: 7.5%;
  color: white;
  font-size: 3rem;
  text-align: left;
  font-family: "Roboto";

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }

  @media(max-width: 400px) {
    font-size: 2rem;
  }

`;

  const MediumTextDiv = styled.div`
  width: 85%;
  margin-left: 7.5%;
  color: white;
  font-family: "Roboto";
  font-size: 1.75rem;
  text-align: left;
  padding: 10px 0px;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }

  @media(max-width: 400px) {
    font-size: 1rem;
  }
  
  `;

const PCImage = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  border: 3px solid #282c34;
  width: 80%;

  @media(max-width: 700px) {
    width: 98%;
  }
`;

const MobileImage = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2.5%;
  border: 3px solid #282c34;
  width: 25%;

  @media(max-width: 700px) {
    width: 40%;
  }
`;

const LI = styled.li`
  color: white;
  font-family: "Roboto";
  font-size: 1.75rem;
  text-align: left;
  margin: 0 10px;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }

  @media(max-width: 400px) {
    font-size: 1rem;
  }
`;