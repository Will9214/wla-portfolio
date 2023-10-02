import styled from "styled-components";
import ScreenshotHome from "./screenshots/completed-workouts.jpeg";
import ScreenshotExerciseSearch from "./screenshots/exerxise-api-search.jpeg";
import ScreenshotWorkout from "./screenshots/workout-mobile.jpeg";
import ScreenshotActivityList from "./screenshots/activity-list-mobile.jpeg";
import ScreenshotActivityWorkout from "./screenshots/activity-in-workout-mobile.jpeg";

const FirstProject = () => {
 return (
  <FirstProjectContainer>
    <Images src={ScreenshotHome} alt="homepage-pic" width="80%" />
    <Images src={ScreenshotWorkout} alt="workout-pic" width="25%" />
    <Images src={ScreenshotActivityList} alt="activity-list-pic" width="25%" />
    <Images src={ScreenshotActivityWorkout} alt="activity-workout-pic" width="25%" />
    <Images src={ScreenshotExerciseSearch} alt="exercise-search-pis" width="80%" />
  </FirstProjectContainer>
 )
};

export default FirstProject;

const FirstProjectContainer = styled.div`
  margin-left: 7.5%;
  width: 85%;
`;

const Images = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-left: 2.5%;
  border: 3px solid #282c34;
`;