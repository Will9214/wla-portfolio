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
      <img src={javaScriptIcon} alt='javaScript-icon' height={75} />
      <img src={html5Icon} alt="html5-icon" height={75} />
      <img src={css3Icon} alt="css3-icon" height={75} />
      <img src={reactIcon} alt="react-icon" height={75} />
      <img src={mongoDBIcon} alt="mongoDB-icon" height={75} />
      <img src={expressIcon} alt="express-icon" height={75} />
      <img src={nodeIcon} alt="node-icon" height={75} />
    </TechStackDiv>
  )
};

export default TechStack;

const TechStackDiv = styled.div`
  margin: auto;
  width: 375px;
  background-color: rgba(255, 255, 255, 0.2);
`;

