import styled from "styled-components";
import WLAPortrait from "./WLAPortrait";
import WLADetails from "./WLADetails";
import TechStack from "./TechStack";

const Introduction = () => {
  
  
  return (
    <DisplayElement>

      <PortraitElement>
        <WLAPortrait />
      </PortraitElement>

      <DetailsElement>
        <WLADetails />

        <TechStackDiv>
          <TechStack />
        </TechStackDiv>
      </DetailsElement>

    </DisplayElement>
  )
};

export default Introduction;

const DisplayElement = styled.div`
  display: flex;
  margin-left: 5%;
`;

const PortraitElement = styled.div`
  width: 35%;
`;

const DetailsElement = styled.div`
  width: 55%;
`;

const TechStackDiv = styled.div` 
  
`;