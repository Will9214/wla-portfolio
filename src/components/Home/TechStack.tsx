import styled from "styled-components";
import javaScriptIcon from "../../logos/javascript.svg";
import html5Icon from "../../logos/html5.svg";
import css3Icon from "../../logos/css3.svg";
import reactIcon from "../../logos/react.svg";
import mongoDBIcon from "../../logos/mongodb.svg";
import expressIcon from "../../logos/express.svg";
import nodeIcon from "../../logos/node.svg";


const TechStack = () => {


  return (
    <TechStackDiv>
      <Img src={javaScriptIcon} alt='javaScript-icon' />
      <Img src={html5Icon} alt="html5-icon" />
      <Img src={css3Icon} alt="css3-icon" />
      <Img src={reactIcon} alt="react-icon" />
      <Img src={mongoDBIcon} alt="mongoDB-icon" />
      <Img src={expressIcon} alt="express-icon" />
      <Img src={nodeIcon} alt="node-icon" />
    </TechStackDiv>
  )
};

export default TechStack;

const TechStackDiv = styled.div`
  margin: auto;
  width: fit-content;
  padding: 0 3px;
  background-color: rgba(255, 255, 255, 0.2);

  @media(max-width: 860px) {
   width: 60%;
   padding: 0;
  }

  @media(max-width: 600px) {
    width: fit-content;  
  } 
`;

const Img = styled.img`
 height: 75px;

 @media(max-width: 1095px) {
    height: 60px;
 }

 @media(max-width: 860px) {
  height: 54px;
 }

 @media(max-width: 700px) {
  height: 45px;
 }

 
`;

