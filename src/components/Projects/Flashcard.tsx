import styled from "styled-components";
import FlashcardImg from "./screenshots/flashcard.png";
import FlashcardAnswerImg from "./screenshots/flashcard-answer.jpeg";
import FlashcardAnswerMobileImg from "./screenshots/flashcard-answer-mobile.jpeg"

const Flashcard = () => {
 return (
  <FirstProjectContainer>

    <LargeTextDiv>
      Introducing <FlashcardAnchor href="https://flashcard-81i4.onrender.com/" target="_blank" >Flashcard</FlashcardAnchor>,
      </LargeTextDiv>
      
      <MediumTextDiv>a straightforward, easy-to-use flashcard application for studying software engineering terminology and concepts.</MediumTextDiv>

    <PCImage1 src={FlashcardImg} alt="homepage-pic" width="65%" />

    <MobileImage src={FlashcardAnswerMobileImg} alt="activity-list-pic" width="25%" />
    <MediumTextDiv>Responsive web design allows me to easily use the application on mobile devices, meaning I can study wherever I go.</MediumTextDiv>

    <MediumTextDiv>Future ideas include expanding topics, disciplines, and allowing the user to choose and filter the cards to only show categories they want to see.</MediumTextDiv>
    
    <PCImage2 src={FlashcardAnswerImg} alt="exercise-search-pis" width="80%" />
    
  </FirstProjectContainer>
 )
};

export default Flashcard;

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

const FlashcardAnchor = styled.a`
  font-family: "Bangers";
  letter-spacing: 3px;
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

const PCImage1 = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2.5%;
  border: 6px solid black;
  width: 65%;

  @media(max-width: 700px) {
    width: 98%;
    border: 3px solid black;
  }
`;

const PCImage2 = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2.5%;
  border: 6px solid black;
  width: 80%;

  @media(max-width: 700px) {
    width: 98%;
    border: 3px solid black;
  }

`;

const MobileImage = styled.img`
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2.5%;
  border: 6px solid black;
  width: 25%;

  @media(max-width: 700px) {
    width: 50%;
    border: 3px solid black;
  }
`;

const LI = styled.li`
  color: white;
  font-family: "Roboto";
  font-size: 1.75rem;
  text-align: left;
  margin: 0 10px;
`;