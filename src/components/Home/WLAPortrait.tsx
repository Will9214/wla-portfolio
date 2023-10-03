import styled from "styled-components";
import portrait from '../../selfportrait.png';

const WLAPortrait = () => {
  
  
  return (
    <DisplayElement>

      <Img src={portrait} alt="William" />
      
    </DisplayElement>
  )
};

export default WLAPortrait;

const DisplayElement = styled.div`
  

  @media(max-width: 700px) {
    margin: auto;
    
  }
`;

const Img = styled.img`
  height: 300px;

  @media(max-width: 1095px) {
    height: 250px;
  }

  @media(max-width: 700px) {
    height: 200px;
  }
`;