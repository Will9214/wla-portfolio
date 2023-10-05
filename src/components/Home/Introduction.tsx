import styled from "styled-components";
import WLAPortrait from "./WLAPortrait";
import WLADetails from "./WLADetails";
import TechStack from "./TechStack";

const Introduction = () => {
  
  
  return (
    <DisplayElement>

      {/* <PortraitElement> */}
        <WLAPortrait />
      {/* </PortraitElement> */}

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
  justify-content: center;
  margin-top: 50px;

  @media(max-width: 600px) {
    display: block;
    margin-top: 25px;
  }
`;

const PortraitElement = styled.div`
  width: 35%;
  

  @media(max-width: 600px) {
    margin-left: 16.5%;
  }
`;

const DetailsElement = styled.div`
  width: 55%;

  @media(max-width: 600px) {
    width: 100%;
  }
`;

const TechStackDiv = styled.div` 
  
`;